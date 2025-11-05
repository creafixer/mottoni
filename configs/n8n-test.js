// N8N Bağlantı Testi
const n8nTest = {
  url: "https://mottoni.onrender.com",
  auth: { 
    username: "admin", 
    password: "" 
  },
  endpoints: [
    "/api/v1/workflows",
    "/api/v1/credentials", 
    "/api/v1/executions"
  ]
};

async function testN8NConnection() {
  try {
    const response = await fetch(`${n8nTest.url}/api/v1/workflows`, {
      headers: {
        'Authorization': `Basic ${btoa(`${n8nTest.auth.username}:${n8nTest.auth.password}`)}`
      }
    });
    
    if (response.ok) {
      const workflows = await response.json();
      console.log("✅ N8N Bağlantı Başarılı");
      console.log(`📊 Toplam Workflow: ${workflows.data?.length || 0}`);
      return true;
    } else {
      console.log("❌ N8N Bağlantı Hatası:", response.status);
      return false;
    }
  } catch (error) {
    console.log("❌ Bağlantı Hatası:", error.message);
    return false;
  }
}

// Test çalıştır
testN8NConnection();
