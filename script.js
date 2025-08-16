document.getElementById("store").addEventListener("click",objToLocal);
document.getElementById("get").addEventListener("click",objFromLocal);
document.getElementById("deleteKey").addEventListener("click",deleteKey);
document.getElementById("alterKey").addEventListener("click",alterKey);

const out = document.getElementById("output");

const object = {
  metadata: {
    version: "1.0",
    timestamp: "2025-08-15T11:30:00Z",
    source: "ExampleDataGenerator",
    recordCount: 100000,
  },
  users: [
    // Array of user objects
    {
      id: "user_00001",
      username: "john_doe",
      email: "john.doe@example.com",
      profile: {
        firstName: "John",
        lastName: "Doe",
        age: 30,
        address: {
          street: "123 Main St",
          city: "Anytown",
          zip: "12345",
          country: "USA",
        },
        preferences: {
          theme: "dark",
          notifications: {
            email: true,
            sms: false,
          },
        },
      },
      orders: [
        // Array of order objects
        {
          orderId: "ORD_00001",
          date: "2024-01-15",
          total: 150.75,
          items: [
            { productId: "PROD_001", quantity: 1, price: 75.25 },
            { productId: "PROD_002", quantity: 2, price: 37.75 },
          ],
        },
        // ... more order objects
      ],
      activityLog: [
        // Array of activity log entries
        { type: "login", timestamp: "2024-01-15T09:00:00Z" },
        { type: "purchase", timestamp: "2024-01-15T10:30:00Z", orderId: "ORD_00001" },
        // ... more activity log entries
      ],
    },
    // ... thousands more user objects following a similar structure
    {
      id: "user_100000",
      username: "jane_smith",
      email: "jane.smith@example.com",
      profile: {
        firstName: "Jane",
        lastName: "Smith",
        age: 25,
        address: {
          street: "456 Oak Ave",
          city: "Otherville",
          zip: "67890",
          country: "USA",
        },
        preferences: {
          theme: "light",
          notifications: {
            email: false,
            sms: true,
          },
        },
      },
      orders: [], // Might be empty
      activityLog: [], // Might be empty
    },
  ],
  products: {
    // Object mapping product IDs to product details
    PROD_001: {
      name: "Laptop Pro",
      category: "Electronics",
      price: 75.25,
      description: "High-performance laptop.",
    },
    PROD_002: {
      name: "Wireless Mouse",
      category: "Accessories",
      price: 37.75,
      description: "Ergonomic wireless mouse.",
    },
    // ... thousands more product objects
  },
  settings: {
    globalConfig: {
      currency: "USD",
      language: "en-US",
    },
    featureFlags: {
      newDashboard: true,
      betaTesting: false,
    },
  },
};

function objToLocal(e,obj=object) {
  const s = JSON.stringify(obj);
  console.log(s);
  localStorage.setItem("obj",s);
  out.innerHTML = s;
}

function objFromLocal() {
  const s  = localStorage.getItem("obj");
  const obj = JSON.parse(s);
  console.log(obj);
  return obj;
}

function alterKey() {
  const k = document.getElementById("key").value;
  const v = document.getElementById("val").value;
  let obj = objFromLocal();
  obj[k] = v;
  objToLocal(null,obj);
}
 
function deleteKey() {
  const k = document.getElementById("key").value;
  console.log("key:"+k)
  let obj = objFromLocal();
  delete obj[k];
  objToLocal(null,obj);
}

