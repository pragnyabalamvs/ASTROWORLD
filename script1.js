const astronauts = [
    { name: "Neil Armstrong", country: "USA", date: "July 20, 1969", mission: "Apollo 11", accomplishments: "- First person to walk on the moon. - Commander of the Apollo 11 mission.", image: "neil.jpeg" },
    { name: "Buzz Aldrin", country: "USA", date: "July 20, 1969", mission: "Apollo 11", accomplishments: "- Second person to walk on the moon. - Lunar Module Pilot for Apollo 11.", image: "buzz.jpeg" },
    { name: "Yuri Gagarin", country: "Russia", date: "April 12, 1961", mission: "Vostok 1", accomplishments: "- First human to travel into space and orbit the Earth.", image: "uri.jpeg" },
    { name: "Valentina Tereshkova", country: "Russia", date: "June 16, 1963", mission: "Vostok 6", accomplishments: "- First woman to travel into space. - Completed 48 orbits around the Earth.", image: "valent.jpeg" },
    { name: "John Glenn", country: "USA", date: "Feb 20, 1962", mission: "Friendship 7", accomplishments: "- First American to orbit the Earth. - Senator.", image: "john.jpeg" },
    { name: "Sally Ride", country: "USA", date: "June 18, 1983", mission: "STS-7 (Challenger)", accomplishments: "- First American woman in space.", image: "sally.jpeg" },
    { name: "Mae Jemison", country: "USA", date: "Sep 12, 1992", mission: "STS-47 (Endeavour)", accomplishments: "- First African American woman in space. - Served as a science mission specialist.", image: "mae.jpeg" },
    { name: "Chris Hadfield", country: "Canada", date: "Dec 19, 2012", mission: "Soyuz TMA-07M (Expedition 34/35)", accomplishments: "- First Canadian to command the International Space Station (ISS).", image: "chris.jpeg" },
    { name: "Peggy Whitson", country: "USA", date: "April 4, 2008", mission: "Soyuz TMA-11 (Expedition 16)", accomplishments: "- Holds the record for the most cumulative time spent in space by an American astronaut (665 days). - First female commander of the International Space Station (ISS).", image: "peggy.jpeg" },
    { name: "Scott Kelly", country: "USA", date: "March 27, 2015", mission: "Soyuz TMA-16M / Soyuz MS-01 (Expedition 46/47/ISS-48/49)", accomplishments: "- Spent nearly a year aboard the International Space Station (ISS).", image: "scott.jpeg" }
  ];
  
  const tableContainer = document.getElementById('table-container');

  function createTable() {
    const table = document.createElement('table');
  
  
    const thead = table.createTHead();
    const headerRow = thead.insertRow();
    const imageHeader = document.createElement('th');
    imageHeader.textContent = "Image";
    headerRow.appendChild(imageHeader);
    const nameHeader = document.createElement('th');
    nameHeader.textContent = "Name";
    headerRow.appendChild(nameHeader);
    for (const key in astronauts[0]) {
      if (key !== "image" && key !== "name") { 
        const th = document.createElement('th');
        th.textContent = key.charAt(0).toUpperCase() + key.slice(1);
        headerRow.appendChild(th);
      }
    }
    
   
    const tbody = table.createTBody();
    astronauts.forEach(astronaut => {
      const row = tbody.insertRow();
     
      const imageCell = row.insertCell();
      const img = document.createElement('img');
      img.src = astronaut.image; 
      img.alt = astronaut.name; 
      img.style.width = "50px"; 
      img.style.height = "50px"; 
      imageCell.appendChild(img);
 
      const nameCell = row.insertCell();
      nameCell.textContent = astronaut.name;
      for (const key in astronaut) {
        if (key !== "image" && key !== "name") { 
          const cell = row.insertCell();
          cell.textContent = astronaut[key];
        }
      }
    });
  
    tableContainer.appendChild(table);
  }
  
  createTable();