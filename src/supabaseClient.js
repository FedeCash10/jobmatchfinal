import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qqtziklagpbqjlnylpqz.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxdHppa2xhZ3BicWpsbnlscHF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI5NDYyNDIsImV4cCI6MjA2ODUyMjI0Mn0.h5A2Lg4ycp1oBLkYdlJF4iI-_dNGHgl2h-zKkyeAhFs";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;