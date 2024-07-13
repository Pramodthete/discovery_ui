
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
        url:'https://www.datocms-assets.com/128889/1717077744-glasert_20220630sr_3213.jpg?fit=max&h=1200&w=1000'
    },
    {
        url:'https://www.datocms-assets.com/128889/1714133620-polo_match_428.jpeg?fit=max&h=1200&w=1000'
    },
    {
        url:'https://www.datocms-assets.com/128889/1714143172-seaglass-lifestyle-photoshoot-raws-1015-of-1188_2023-07-20-153227_mvlx-copy.jpg?fit=max&h=1200&w=1000'
    },
    {
        url:'https://www.datocms-assets.com/128889/1717077616-matt6402-1.jpeg?fit=max&h=1200&w=1000'
    },
    {
        url:'https://www.datocms-assets.com/128889/1714143438-gettyimages-1366370947-2.jpg?fit=max&h=1200&w=1000'
    },
    {
        url:'https://www.datocms-assets.com/128889/1714141127-beach_girl_in_white_001-1-copy.jpg?fit=max&h=1200&w=1000'
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