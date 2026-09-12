(function () {
  'use strict';

  var TOOLS = [
    {name: "Concrete Block Calculator", url: "/tools/concrete/block-calculator.html", cat: "Concrete & Masonry"},
    {name: "Brick Calculator", url: "/tools/concrete/brick-calculator.html", cat: "Concrete & Masonry"},
    {name: "Concrete Column Calculator", url: "/tools/concrete/concrete-column-calculator.html", cat: "Concrete & Masonry"},
    {name: "Concrete Driveway Calculator", url: "/tools/concrete/concrete-driveway-calculator.html", cat: "Concrete & Masonry"},
    {name: "Concrete Footing Calculator", url: "/tools/concrete/concrete-footing-calculator.html", cat: "Concrete & Masonry"},
    {name: "Concrete Patio Calculator", url: "/tools/concrete/concrete-patio-calculator.html", cat: "Concrete & Masonry"},
    {name: "Concrete Slab Calculator", url: "/tools/concrete/concrete-slab-calculator.html", cat: "Concrete & Masonry"},
    {name: "Concrete Stairs Calculator", url: "/tools/concrete/concrete-stairs-calculator.html", cat: "Concrete & Masonry"},
    {name: "Concrete Weight Calculator", url: "/tools/concrete/concrete-weight-calculator.html", cat: "Concrete & Masonry"},
    {name: "Mortar Calculator", url: "/tools/concrete/mortar-calculator.html", cat: "Concrete & Masonry"},
    {name: "Rebar Calculator", url: "/tools/concrete/rebar-calculator.html", cat: "Concrete & Masonry"},
    {name: "Sonotube Calculator", url: "/tools/concrete/sonotube-calculator.html", cat: "Concrete & Masonry"},
    {name: "Stamped Concrete Calculator", url: "/tools/concrete/stamped-concrete-calculator.html", cat: "Concrete & Masonry"},
    {name: "Deck Beam Calculator", url: "/tools/decking/deck-beam-calculator.html", cat: "Decking"},
    {name: "Deck Calculator", url: "/tools/decking/deck-calculator.html", cat: "Decking"},
    {name: "Deck Joist Calculator", url: "/tools/decking/deck-joist-calculator.html", cat: "Decking"},
    {name: "Deck Post Calculator", url: "/tools/decking/deck-post-calculator.html", cat: "Decking"},
    {name: "Deck Railing Calculator", url: "/tools/decking/deck-railing-calculator.html", cat: "Decking"},
    {name: "Deck Stair Calculator", url: "/tools/decking/deck-stair-calculator.html", cat: "Decking"},
    {name: "Drywall Calculator", url: "/tools/drywall/drywall-calculator.html", cat: "Drywall"},
    {name: "Drywall Mud Calculator", url: "/tools/drywall/drywall-mud-calculator.html", cat: "Drywall"},
    {name: "Drywall Tape Calculator", url: "/tools/drywall/drywall-tape-calculator.html", cat: "Drywall"},
    {name: "Amp Calculator", url: "/tools/electrical/amp-calculator.html", cat: "Electrical"},
    {name: "Circuit Load Calculator", url: "/tools/electrical/circuit-load-calculator.html", cat: "Electrical"},
    {name: "Conduit Fill Calculator", url: "/tools/electrical/conduit-fill-calculator.html", cat: "Electrical"},
    {name: "Lighting Calculator", url: "/tools/electrical/lighting-calculator.html", cat: "Electrical"},
    {name: "Voltage Drop Calculator", url: "/tools/electrical/voltage-drop-calculator.html", cat: "Electrical"},
    {name: "Wattage Calculator", url: "/tools/electrical/wattage-calculator.html", cat: "Electrical"},
    {name: "Wire Gauge Calculator", url: "/tools/electrical/wire-gauge-calculator.html", cat: "Electrical"},
    {name: "Chain Link Fence Calculator", url: "/tools/fencing/chain-link-calculator.html", cat: "Fencing"},
    {name: "Fence Calculator", url: "/tools/fencing/fence-calculator.html", cat: "Fencing"},
    {name: "Fence Gate Calculator", url: "/tools/fencing/gate-calculator.html", cat: "Fencing"},
    {name: "Post Spacing Calculator", url: "/tools/fencing/post-spacing-calculator.html", cat: "Fencing"},
    {name: "Vinyl Fence Calculator", url: "/tools/fencing/vinyl-fence-calculator.html", cat: "Fencing"},
    {name: "Wood Fence Calculator", url: "/tools/fencing/wood-fence-calculator.html", cat: "Fencing"},
    {name: "Carpet Calculator", url: "/tools/flooring/carpet-calculator.html", cat: "Flooring"},
    {name: "Floor Joist Calculator", url: "/tools/flooring/floor-joist-calculator.html", cat: "Flooring"},
    {name: "Hardwood Floor Calculator", url: "/tools/flooring/hardwood-calculator.html", cat: "Flooring"},
    {name: "Laminate Floor Calculator", url: "/tools/flooring/laminate-calculator.html", cat: "Flooring"},
    {name: "Linoleum Calculator", url: "/tools/flooring/linoleum-calculator.html", cat: "Flooring"},
    {name: "Subfloor Calculator", url: "/tools/flooring/subfloor-calculator.html", cat: "Flooring"},
    {name: "Tile Calculator", url: "/tools/flooring/tile-calculator.html", cat: "Flooring"},
    {name: "Vinyl Flooring Calculator", url: "/tools/flooring/vinyl-flooring-calculator.html", cat: "Flooring"},
    {name: "Basement Cost Calculator", url: "/tools/foundation/basement-calculator.html", cat: "Foundation"},
    {name: "Foundation Calculator", url: "/tools/foundation/foundation-calculator.html", cat: "Foundation"},
    {name: "Wood Beam Calculator", url: "/tools/framing/beam-calculator.html", cat: "Framing & Structure"},
    {name: "Header Calculator", url: "/tools/framing/header-calculator.html", cat: "Framing & Structure"},
    {name: "Rafter Calculator", url: "/tools/framing/rafter-calculator.html", cat: "Framing & Structure"},
    {name: "Wall Sheathing Calculator", url: "/tools/framing/sheathing-calculator.html", cat: "Framing & Structure"},
    {name: "Stud Calculator", url: "/tools/framing/stud-calculator.html", cat: "Framing & Structure"},
    {name: "Garage Cost Calculator", url: "/tools/garage/garage-cost-calculator.html", cat: "Garage"},
    {name: "Garage Slab Calculator", url: "/tools/garage/garage-slab-calculator.html", cat: "Garage"},
    {name: "AC Tonnage Calculator", url: "/tools/hvac/ac-tonnage-calculator.html", cat: "HVAC"},
    {name: "Airflow Calculator", url: "/tools/hvac/airflow-calculator.html", cat: "HVAC"},
    {name: "BTU Calculator", url: "/tools/hvac/btu-calculator.html", cat: "HVAC"},
    {name: "Duct Size Calculator", url: "/tools/hvac/duct-calculator.html", cat: "HVAC"},
    {name: "Furnace Size Calculator", url: "/tools/hvac/furnace-size-calculator.html", cat: "HVAC"},
    {name: "HVAC Cost Calculator", url: "/tools/hvac/hvac-cost-calculator.html", cat: "HVAC"},
    {name: "Blown-In Insulation Calculator", url: "/tools/insulation/blown-in-insulation-calculator.html", cat: "Insulation"},
    {name: "Insulation Calculator", url: "/tools/insulation/insulation-calculator.html", cat: "Insulation"},
    {name: "R-Value Calculator", url: "/tools/insulation/r-value-calculator.html", cat: "Insulation"},
    {name: "Vapor Barrier Calculator", url: "/tools/insulation/vapor-barrier-calculator.html", cat: "Insulation"},
    {name: "Backsplash Calculator", url: "/tools/kitchen-bath/backsplash-calculator.html", cat: "Kitchen & Bath"},
    {name: "Bathroom Tile Calculator", url: "/tools/kitchen-bath/bathroom-tile-calculator.html", cat: "Kitchen & Bath"},
    {name: "Kitchen Cabinet Calculator", url: "/tools/kitchen-bath/cabinet-calculator.html", cat: "Kitchen & Bath"},
    {name: "Countertop Calculator", url: "/tools/kitchen-bath/countertop-calculator.html", cat: "Kitchen & Bath"},
    {name: "Shower Tile Calculator", url: "/tools/kitchen-bath/shower-tile-calculator.html", cat: "Kitchen & Bath"},
    {name: "Tub Surround Calculator", url: "/tools/kitchen-bath/tub-surround-calculator.html", cat: "Kitchen & Bath"},
    {name: "Bathroom Vanity Calculator", url: "/tools/kitchen-bath/vanity-calculator.html", cat: "Kitchen & Bath"},
    {name: "Yard Drainage Calculator", url: "/tools/landscaping/drainage-calculator.html", cat: "Landscaping"},
    {name: "Landscape Edging Calculator", url: "/tools/landscaping/edging-calculator.html", cat: "Landscaping"},
    {name: "Gravel Calculator", url: "/tools/landscaping/gravel-calculator.html", cat: "Landscaping"},
    {name: "Mulch Calculator", url: "/tools/landscaping/mulch-calculator.html", cat: "Landscaping"},
    {name: "Paver Calculator", url: "/tools/landscaping/paver-calculator.html", cat: "Landscaping"},
    {name: "Retaining Wall Calculator", url: "/tools/landscaping/retaining-wall-calculator.html", cat: "Landscaping"},
    {name: "Rock Calculator", url: "/tools/landscaping/rock-calculator.html", cat: "Landscaping"},
    {name: "Sand Calculator", url: "/tools/landscaping/sand-calculator.html", cat: "Landscaping"},
    {name: "Sod Calculator", url: "/tools/landscaping/sod-calculator.html", cat: "Landscaping"},
    {name: "Soil Calculator", url: "/tools/landscaping/soil-calculator.html", cat: "Landscaping"},
    {name: "Exterior Paint Calculator", url: "/tools/painting/exterior-paint-calculator.html", cat: "Painting"},
    {name: "Paint Calculator", url: "/tools/painting/paint-calculator.html", cat: "Painting"},
    {name: "Painting Cost Calculator", url: "/tools/painting/painting-cost-calculator.html", cat: "Painting"},
    {name: "Primer Calculator", url: "/tools/painting/primer-calculator.html", cat: "Painting"},
    {name: "Wood Stain Calculator", url: "/tools/painting/stain-calculator.html", cat: "Painting"},
    {name: "Wallpaper Calculator", url: "/tools/painting/wallpaper-calculator.html", cat: "Painting"},
    {name: "Asphalt Driveway Calculator", url: "/tools/paving/asphalt-driveway-calculator.html", cat: "Paving"},
    {name: "Drain Pipe Calculator", url: "/tools/plumbing/drain-pipe-calculator.html", cat: "Plumbing"},
    {name: "Plumbing Fixture Calculator", url: "/tools/plumbing/fixture-calculator.html", cat: "Plumbing"},
    {name: "Pipe Size Calculator", url: "/tools/plumbing/pipe-size-calculator.html", cat: "Plumbing"},
    {name: "Septic Tank Calculator", url: "/tools/plumbing/septic-tank-calculator.html", cat: "Plumbing"},
    {name: "Water Flow Calculator", url: "/tools/plumbing/water-flow-calculator.html", cat: "Plumbing"},
    {name: "Water Heater Calculator", url: "/tools/plumbing/water-heater-calculator.html", cat: "Plumbing"},
    {name: "Home Renovation Cost Calculator", url: "/tools/remodeling/home-renovation-cost-calculator.html", cat: "Remodeling"},
    {name: "Metal Roofing Calculator", url: "/tools/roofing/metal-roof-calculator.html", cat: "Roofing"},
    {name: "Roof Pitch Calculator", url: "/tools/roofing/roof-pitch-calculator.html", cat: "Roofing"},
    {name: "Roof Sheathing Calculator", url: "/tools/roofing/roof-sheathing-calculator.html", cat: "Roofing"},
    {name: "Roof Truss Calculator", url: "/tools/roofing/roof-truss-calculator.html", cat: "Roofing"},
    {name: "Roof Vent Calculator", url: "/tools/roofing/roof-vent-calculator.html", cat: "Roofing"},
    {name: "Roofing Calculator", url: "/tools/roofing/roofing-calculator.html", cat: "Roofing"},
    {name: "Shingle Calculator", url: "/tools/roofing/shingle-calculator.html", cat: "Roofing"},
    {name: "Skylight Calculator", url: "/tools/roofing/skylight-calculator.html", cat: "Roofing"},
    {name: "Brick Veneer Calculator", url: "/tools/siding/brick-veneer-calculator.html", cat: "Siding"},
    {name: "Gutter Calculator", url: "/tools/siding/gutter-calculator.html", cat: "Siding"},
    {name: "Siding Calculator", url: "/tools/siding/siding-calculator.html", cat: "Siding"},
    {name: "Stucco Calculator", url: "/tools/siding/stucco-calculator.html", cat: "Siding"},
    {name: "Vinyl Siding Calculator", url: "/tools/siding/vinyl-siding-calculator.html", cat: "Siding"},
    {name: "Solar Cost Calculator", url: "/tools/solar/solar-cost-calculator.html", cat: "Solar"},
    {name: "Solar Panel Calculator", url: "/tools/solar/solar-panel-calculator.html", cat: "Solar"},
    {name: "Wood Stair Calculator", url: "/tools/stairs/wood-stair-calculator.html", cat: "Stairs"},
    {name: "Door Calculator", url: "/tools/windows-doors/door-calculator.html", cat: "Windows & Doors"},
    {name: "Egress Window Calculator", url: "/tools/windows-doors/egress-window-calculator.html", cat: "Windows & Doors"},
    {name: "Garage Door Calculator", url: "/tools/windows-doors/garage-door-calculator.html", cat: "Windows & Doors"},
    {name: "Window Calculator", url: "/tools/windows-doors/window-calculator.html", cat: "Windows & Doors"}
  ];

  function init() {
    var header = document.querySelector('.header-inner');
    if (!header) return;

    // Search container
    var wrap = document.createElement('div');
    wrap.className = 'site-search';
    wrap.innerHTML =
      '<input type="search" id="siteSearchInput" placeholder="Search 113 calculators..." autocomplete="off" aria-label="Search calculators">' +
      '<div class="search-results" id="siteSearchResults" hidden></div>';
    header.insertBefore(wrap, header.querySelector('.mobile-menu-btn'));

    var input = wrap.querySelector('#siteSearchInput');
    var results = wrap.querySelector('#siteSearchResults');

    function render(q) {
      q = (q || '').trim().toLowerCase();
      if (!q) { results.hidden = true; results.innerHTML = ''; return; }
      var matches = TOOLS.filter(function (t) {
        return t.name.toLowerCase().indexOf(q) !== -1 || t.cat.toLowerCase().indexOf(q) !== -1;
      }).slice(0, 10);
      if (!matches.length) {
        results.innerHTML = '<div class="search-no-results">No calculators found</div>';
      } else {
        results.innerHTML = matches.map(function (t) {
          return '<a class="search-result-item" href="' + t.url + '">' +
            '<span class="sr-name">' + t.name + '</span>' +
            '<span class="sr-cat">' + t.cat + '</span></a>';
        }).join('');
      }
      results.hidden = false;
    }

    input.addEventListener('input', function () { render(input.value); });
    input.addEventListener('focus', function () { if (input.value) render(input.value); });
    document.addEventListener('click', function (e) {
      if (!wrap.contains(e.target)) { results.hidden = true; }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
