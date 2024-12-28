import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://ynczdvhjgblaeaxffrqv.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InluY3pkdmhqZ2JsYWVheGZmcnF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzMDk0MDUsImV4cCI6MjA1MDg4NTQwNX0.206mdSDHjs_-ZCqhRZlHz_nC3Wo64Wnz8UhxXqnDgEg",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InluY3pkdmhqZ2JsYWVheGZmcnF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzMDk0MDUsImV4cCI6MjA1MDg4NTQwNX0.206mdSDHjs_-ZCqhRZlHz_nC3Wo64Wnz8UhxXqnDgEg"
    }
})