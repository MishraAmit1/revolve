import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kqrhskbutxaqidvynnyb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtxcmhza2J1dHhhcWlkdnlubnliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0MjI0MDcsImV4cCI6MjA2OTk5ODQwN30.cnpTaFAyZmrUxZvYd49v3Ep6Vn45T2-he4Q5w-qsgbw' // Replace with your anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey)