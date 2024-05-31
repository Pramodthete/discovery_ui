
let data = [
    {
      temp: "32 &degF",
      wind: "5mph",
      copmass: "73",
      loc: "40.08629948516978° N / -120.1605391°",
      itemfade: "Lake Tahoe, California",
      title: "Homewood Mountain & Lake Club"
  
    },
    {
      temp: "77 &degF",
      wind: "102mph",
      copmass: "88",
      loc: "39.08629948516978° N / -140.1605391°",
      itemfade: "sillicon valley , california",
      title: "Carde Valle"
    },
    {
      temp: "78 &degF",
      wind: "10 mph",
      copmass: "310",
      loc: "24.08629948516978° N / -170.1605391°",
      itemfade: "La Quinta, California",
      title: "MAdison"
    },
    {
      temp: "28 &degF",
      wind: "0 mph",
      copmass: "0",
      loc: "45.08629948516978° N / -160.1605391°",
      itemfade: "WhiteFish,Montana",
      title: "Iron Horse"
    },
    {
      temp: "19 &degF",
      wind: "2 mph",
      copmass: "173",
      loc: "56.08629948516978° N / -130.1605391°",
      itemfade: "Big Sky,Montana",
      title: "Yellowstone Club"
    },
    {
      temp: "46 &degF",
      wind: "9 mph",
      copmass: "350",
      loc: "33.08629948516978° N / -140.1605391°",
      itemfade: "Westlake , Texas",
      title: "Vaquero"
    },
    {
      temp: "54 &degF",
      wind: "8 mph",
      copmass: "24 &deg",
      loc: "27.08629948516978° N / -110.1605391°",
      itemfade: "Austin ,Texas",
      title: "Driftwood"
    },
    {
      temp: "74 &degF",
      wind: "3 mph",
      copmass: "359&deg",
      loc: "32.08629948516978° N / -130.1605391°",
      itemfade: "Guanacaste,Costa Rica",
      title: "Zapotal Golf & Beach Club"
    },
    {
      temp: "43 &degF",
      wind: "6 mph",
      copmass: "338 &deg",
      loc: "44.08629948516978° N / -180.1605391°",
      itemfade: "Nashville , Tennessee",
      title: "Troubadour"
    },
    {
      temp: "34 &degF",
      wind: "3 mph",
      copmass: "325 &deg",
      loc: "11.08629948516978° N / -150.1605391°",
      itemfade: "Cashiers, North Corolina",
      title: "Mountaintop"
    },
    {
      temp: "72 &degF",
      wind: "3 mph",
      copmass: "200",
      loc: "14.08629948516978° N / -160.1605391°",
      itemfade: "Jupiter Island , Florida",
      title: "Atlantic Beach"
    },
    {
      temp: "73 &degF",
      wind: "0 mph",
      copmass: "0 &deg",
      loc: "21.08629948516978° N / -150.1605391°",
      itemfade: "Naples , Florida",
      title: "Naples Beach Club"
    },
    {
      temp: "75 &degF",
      wind: "16 mph",
      copmass: "195 &deg",
      loc: "29.08629948516978° N / -130.1605391°",
      itemfade: "Great Guana Cay,Bahamas",
      title: "Baker's Bay"
    },
    {
      temp: "72 &degF",
      wind: "2 mph",
      copmass: "154 &deg",
      loc: "34.08629948516978° N / -140.1605391°",
      itemfade: "Rio San Juan , Dominican Republic",
      title: "Playa Grande"
    },
    {
      temp: "79 &degF",
      wind: "18 mph",
      copmass: "103&deg",
      loc: "36.08629948516978° N / -110.1605391°",
      itemfade: "Barbuda ,West Indies",
      title: "Barbuda Ocean Club"
    }
  ];

  let imgData=[
    {
        url:'https://discoverylandco.com/imager/images/248/Cordevalle-Map_397186feb8bd51bb37bc24fc2b9b500f.jpg'
    },
    {
        url:'https://discoverylandco.com/imager/images/14936/Screen-Shot-2023-08-29-at-2.32.54-PM_397186feb8bd51bb37bc24fc2b9b500f.png'
    },
    {
        url:'https://discoverylandco.com/imager/images/14898/Screen-Shot-2023-08-29-at-1.47.55-PM_397186feb8bd51bb37bc24fc2b9b500f.png'
    },
    {
        url:'https://discoverylandco.com/imager/images/395/hideaway3-Map_397186feb8bd51bb37bc24fc2b9b500f.jpg'
    },
    {
        url:'https://discoverylandco.com/imager/images/773/summit-Map_190718_114312_397186feb8bd51bb37bc24fc2b9b500f.jpg'
    },
    {
        url:'https://discoverylandco.com/imager/images/245/Estancia-Map_397186feb8bd51bb37bc24fc2b9b500f.jpg'
    }
  ]

  let currentIndex = 1;

  function updateContent() {
      $('.temp').html(data[currentIndex].temp);
      $('.wind').html(data[currentIndex].wind);
      $('.copmass').html(data[currentIndex].copmass);
      $('.loc').html(data[currentIndex].loc);
      $('.itemfade').html(data[currentIndex].itemfade);
      $('.title').html(data[currentIndex].title.replace("&", "<br>&"));
      $('#sideimg').attr('src', imgData[currentIndex % imgData.length].url);
  }

  $(document).ready(function() {
      updateContent();
      $('#leftBtn').click(function() {
          currentIndex = (currentIndex - 1 + data.length) % data.length;
          updateContent();
      });
    
      $('#rightBtn').click(function() {
          currentIndex = (currentIndex + 1) % data.length;
          updateContent();
      });
  });