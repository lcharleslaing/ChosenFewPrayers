import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xivoatxgftzcfoswoten.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhpdm9hdHhnZnR6Y2Zvc3dvdGVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc4MDMyODIsImV4cCI6MjAxMzM3OTI4Mn0.pmdD0YpQXYo73EgiEzRM5sG9dEsCRP9mqyOOleRdz9U';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
