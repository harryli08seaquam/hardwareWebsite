document.addEventListener('DOMContentLoaded', function() {
    const laptops = {
        "acer": {
            name: "Acer Predator Neo 16\"",
            price: "$1,299.99",
            processor: "13th Generation Intel Core i5-13500HX, 4.7GHz",
            storage: "1TB SSD",
            memory: "16GB DDR5 RAM",
            graphics: "NVIDIA RTX 4050 with 6GB video memory",
            display: "16-inch IPS panel, 1920 x 1200 resolution",
            connectivity: "Two USB Type-C ports (Thunderbolt 4), Two USB 3.2 Gen 2 ports, One HDMI 2.1 Port with HDCP support, Display port through USB-C, One headphone/speaker/line-out jack",
            os: "Preloaded with Windows 11"
        },
        "msi": {
            name: "MSI Pulse Series 17.3\"",
            price: "$1,799.99",
            processor: "Intel Core i9-13900H, 5.4GHz",
            storage: "1TB PCIe NVMe SSD",
            memory: "16GB DDR5 RAM",
            graphics: "8GB NVIDIA GeForce RTX 4070",
            display: "17.3-inch IPS-level, 1920 x 1080 resolution, 144Hz refresh rate",
            connectivity: "One USB 3.2 Gen1 port with DP 1.4, Two USB 3.2 Gen1 ports, One USB 2.0, One HDMI port",
            os: "Preloaded with Windows 11"
        },
        "alienware": {
            name: "Alienware m16 R2 16\"",
            price: "$1,999.95",
            processor: "Intel Core Ultra 7 155H, 1.40GHz to 4.80GHz P-core, 24MB cache, 16 cores",
            storage: "1TB M.2 PCIe NVMe SSD",
            memory: "16GB DDR5 RAM (2 x 8GB modules) clocked at 5600MHz",
            graphics: "NVIDIA GeForce RTX 4060 with 8GB GDDR6 memory",
            display: "16-inch QHD+ (2560 x 1600), 240Hz refresh rate, 3ms response time",
            connectivity: "Two USB 3.2 Type A (side), One Thunderbolt 4 (rear), One USB 3.2 Type-C (rear), One HDMI 2.1 (rear), One combo jack (headphone/microphone) (side)",
            os: "Preloaded with Windows 11"
        },
        "lenovo": {
            name: "Lenovo Legion Slim 5i 16\"",
            price: "$1,599.95",
            processor: "Intel Core i7-13700H, 2.4GHz, 14-core",
            storage: "512GB SSD",
            memory: "16GB DDR5 RAM",
            graphics: "NVIDIA RTX 4060",
            display: "16-inch Lenovo PureSight, 2560 x 1600 WQXGA resolution, 165Hz variable refresh rate",
            connectivity: "4-in-1 card reader, USB 3.2 Gen 2 (DP 1.4, PD 140W), USB 3.2 Gen 2 (DP 1.4), Shared mic/headphone jack",
            os: "Preinstalled Windows 11 Home"
        }
    };

    const laptopSelects = document.querySelectorAll('.laptop-select');
    const comparisonTable = document.getElementById('comparison-table');

    laptopSelects.forEach(select => {
        select.addEventListener('change', updateComparison);
    });

    function updateComparison() {
        laptopSelects.forEach((select, index) => {
            const laptop = laptops[select.value];
            if (laptop) {
                document.getElementById(`laptop${index + 1}-name`).textContent = laptop.name;
                document.getElementById(`laptop${index + 1}-price`).textContent = laptop.price;
                document.getElementById(`laptop${index + 1}-processor`).textContent = laptop.processor;
                document.getElementById(`laptop${index + 1}-storage`).textContent = laptop.storage;
                document.getElementById(`laptop${index + 1}-memory`).textContent = laptop.memory;
                document.getElementById(`laptop${index + 1}-graphics`).textContent = laptop.graphics;
                document.getElementById(`laptop${index + 1}-display`).textContent = laptop.display;
                document.getElementById(`laptop${index + 1}-connectivity`).textContent = laptop.connectivity;
                document.getElementById(`laptop${index + 1}-os`).textContent = laptop.os;
            } else {
                document.getElementById(`laptop${index + 1}-name`).textContent = "Laptop " + (index + 1);
                document.getElementById(`laptop${index + 1}-price`).textContent = "";
                document.getElementById(`laptop${index + 1}-processor`).textContent = "";
                document.getElementById(`laptop${index + 1}-storage`).textContent = "";
                document.getElementById(`laptop${index + 1}-memory`).textContent = "";
                document.getElementById(`laptop${index + 1}-graphics`).textContent = "";
                document.getElementById(`laptop${index + 1}-display`).textContent = "";
                document.getElementById(`laptop${index + 1}-connectivity`).textContent = "";
                document.getElementById(`laptop${index + 1}-os`).textContent = "";
            }
        });
    }
});
