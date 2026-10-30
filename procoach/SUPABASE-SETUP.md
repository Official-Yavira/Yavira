# Collegare PROCOACH a Supabase

Questa configurazione abilita gli account email/password e un archivio cloud privato. Il sito statico usa il client JavaScript Supabase nel browser; l'accesso ai dati è protetto da Row Level Security (RLS).

## 1. Crea il progetto

Apri https://supabase.com/dashboard/projects e crea un nuovo progetto Supabase. Conserva in modo sicuro le credenziali amministrative: non servono a PROCOACH e non devono essere inserite nel sito.

## 2. Crea la tabella privata

Nel progetto Supabase apri **SQL Editor → New query**. Copia tutto il contenuto di `supabase-schema.sql` da questa cartella, incollalo nell'editor ed esegui lo script.

## 3. Configura gli URL di autenticazione

In **Authentication → URL Configuration** imposta il Site URL e aggiungi tra i Redirect URLs:

`https://official-yavira.github.io/Yavira/`

Le email di conferma e recupero password devono poter tornare a questo indirizzo. Per test locali, aggiungi anche l'URL locale che utilizzerai.

## 4. Inserisci le credenziali pubbliche

Nel progetto Supabase recupera:
- **Project URL**
- **Publishable key** (in alcuni progetti precedenti è indicata come chiave `anon`)

Apri `supabase-config.js` e inserisci quei due valori nei campi `url` e `publishableKey`. La publishable key è destinata al client e può essere pubblica soltanto con RLS e permessi minimi attivi.

**Non inserire mai** una `service_role` key, una secret key, password o token amministrativi in questo file o nel repository. Le chiavi amministrative bypassano RLS e devono restare soltanto lato server.

## 5. Primo accesso e trasferimento dei dati

1. Apri PROCOACH e vai su **Account PROCOACH**.
2. Crea l'account con la tua email e una password di almeno 8 caratteri.
3. Conferma l'email dal messaggio ricevuto e poi accedi.
4. Sul dispositivo in cui hai già creato sedute ed esercizi, premi **Salva i dati locali nel cloud** e conferma.
5. Su un altro dispositivo, accedi allo stesso account e premi **Recupera i dati dal cloud**.

La sincronizzazione è manuale in questa prima versione: il caricamento sostituisce l'archivio cloud dell'account; il recupero sostituisce i dati PROCOACH locali del browser. Esporta sempre un backup da **Il mio archivio** prima di recuperare o sostituire dati.

## Struttura e sicurezza

- Una sola riga per account in `public.procoach_user_data`.
- I dati PROCOACH sono conservati in un campo JSONB e ogni richiesta richiede un utente autenticato.
- Le policy RLS confrontano `user_id` con `auth.uid()`; gli utenti non possono leggere o modificare le righe altrui.
- Non è presente alcuna chiave amministrativa nel frontend.
- Il profilo e i messaggi salvati localmente vengono trasferiti solo nell'archivio privato dello stesso account; non sono pubblicati nella community.
