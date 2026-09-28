(function () {
  'use strict';

  var TOOLS = [
    {name: "Concrete Block Calculator", url: "/tools/concrete/block-calculator", cat: "Concrete & Masonry"},
    {name: "Brick Calculator", url: "/tools/concrete/brick-calculator", cat: "Concrete & Masonry"},
    {name: "Concrete Column Calculator", url: "/tools/concrete/concrete-column-calculator", cat: "Concrete & Masonry"},
    {name: "Concrete Driveway Calculator", url: "/tools/concrete/concrete-driveway-calculator", cat: "Concrete & Masonry"},
    {name: "Concrete Footing Calculator", url: "/tools/concrete/concrete-footing-calculator", cat: "Concrete & Masonry"},
    {name: "Concrete Patio Calculator", url: "/tools/concrete/concrete-patio-calculator", cat: "Concrete & Masonry"},
    {name: "Concrete Slab Calculator", url: "/tools/concrete/concrete-slab-calculator", cat: "Concrete & Masonry"},
    {name: "Concrete Stairs Calculator", url: "/tools/concrete/concrete-stairs-calculator", cat: "Concrete & Masonry"},
    {name: "Concrete Weight Calculator", url: "/tools/concrete/concrete-weight-calculator", cat: "Concrete & Masonry"},
    {name: "Mortar Calculator", url: "/tools/concrete/mortar-calculator", cat: "Concrete & Masonry"},
    {name: "Rebar Calculator", url: "/tools/concrete/rebar-calculator", cat: "Concrete & Masonry"},
    {name: "Sonotube Calculator", url: "/tools/concrete/sonotube-calculator", cat: "Concrete & Masonry"},
    {name: "Stamped Concrete Calculator", url: "/tools/concrete/stamped-concrete-calculator", cat: "Concrete & Masonry"},
    {name: "Deck Beam Calculator", url: "/tools/decking/deck-beam-calculator", cat: "Decking"},
    {name: "Deck Calculator", url: "/tools/decking/deck-calculator", cat: "Decking"},
    {name: "Deck Cost Calculator", url: "/tools/decking/deck-cost-calculator", cat: "Decking"},
    {name: "Deck Joist Calculator", url: "/tools/decking/deck-joist-calculator", cat: "Decking"},
    {name: "Deck Post Calculator", url: "/tools/decking/deck-post-calculator", cat: "Decking"},
    {name: "Deck Railing Calculator", url: "/tools/decking/deck-railing-calculator", cat: "Decking"},
    {name: "Deck Stair Calculator", url: "/tools/decking/deck-stair-calculator", cat: "Decking"},
    {name: "Drywall Calculator", url: "/tools/drywall/drywall-calculator", cat: "Drywall"},
    {name: "Drywall Mud Calculator", url: "/tools/drywall/drywall-mud-calculator", cat: "Drywall"},
    {name: "Drywall Tape Calculator", url: "/tools/drywall/drywall-tape-calculator", cat: "Drywall"},
    {name: "Amp Calculator", url: "/tools/electrical/amp-calculator", cat: "Electrical"},
    {name: "Circuit Load Calculator", url: "/tools/electrical/circuit-load-calculator", cat: "Electrical"},
    {name: "Conduit Fill Calculator", url: "/tools/electrical/conduit-fill-calculator", cat: "Electrical"},
    {name: "Lighting Calculator", url: "/tools/electrical/lighting-calculator", cat: "Electrical"},
    {name: "Voltage Drop Calculator", url: "/tools/electrical/voltage-drop-calculator", cat: "Electrical"},
    {name: "Wattage Calculator", url: "/tools/electrical/wattage-calculator", cat: "Electrical"},
    {name: "Wire Gauge Calculator", url: "/tools/electrical/wire-gauge-calculator", cat: "Electrical"},
    {name: "Chain Link Fence Calculator", url: "/tools/fencing/chain-link-calculator", cat: "Fencing"},
    {name: "Fence Calculator", url: "/tools/fencing/fence-calculator", cat: "Fencing"},
    {name: "Fence Cost Calculator", url: "/tools/fencing/fence-cost-calculator", cat: "Fencing"},
    {name: "Fence Gate Calculator", url: "/tools/fencing/gate-calculator", cat: "Fencing"},
    {name: "Post Spacing Calculator", url: "/tools/fencing/post-spacing-calculator", cat: "Fencing"},
    {name: "Vinyl Fence Calculator", url: "/tools/fencing/vinyl-fence-calculator", cat: "Fencing"},
    {name: "Wood Fence Calculator", url: "/tools/fencing/wood-fence-calculator", cat: "Fencing"},
    {name: "Carpet Calculator", url: "/tools/flooring/carpet-calculator", cat: "Flooring"},
    {name: "Floor Joist Calculator", url: "/tools/flooring/floor-joist-calculator", cat: "Flooring"},
    {name: "Flooring Cost Calculator", url: "/tools/flooring/flooring-cost-calculator", cat: "Flooring"},
    {name: "Hardwood Floor Calculator", url: "/tools/flooring/hardwood-calculator", cat: "Flooring"},
    {name: "Laminate Floor Calculator", url: "/tools/flooring/laminate-calculator", cat: "Flooring"},
    {name: "Linoleum Calculator", url: "/tools/flooring/linoleum-calculator", cat: "Flooring"},
    {name: "Subfloor Calculator", url: "/tools/flooring/subfloor-calculator", cat: "Flooring"},
    {name: "Tile Calculator", url: "/tools/flooring/tile-calculator", cat: "Flooring"},
    {name: "Vinyl Flooring Calculator", url: "/tools/flooring/vinyl-flooring-calculator", cat: "Flooring"},
    {name: "Basement Cost Calculator", url: "/tools/foundation/basement-calculator", cat: "Foundation"},
    {name: "Foundation Calculator", url: "/tools/foundation/foundation-calculator", cat: "Foundation"},
    {name: "Wood Beam Calculator", url: "/tools/framing/beam-calculator", cat: "Framing & Structure"},
    {name: "Header Calculator", url: "/tools/framing/header-calculator", cat: "Framing & Structure"},
    {name: "Rafter Calculator", url: "/tools/framing/rafter-calculator", cat: "Framing & Structure"},
    {name: "Wall Sheathing Calculator", url: "/tools/framing/sheathing-calculator", cat: "Framing & Structure"},
    {name: "Stud Calculator", url: "/tools/framing/stud-calculator", cat: "Framing & Structure"},
    {name: "Garage Cost Calculator", url: "/tools/garage/garage-cost-calculator", cat: "Garage"},
    {name: "Garage Slab Calculator", url: "/tools/garage/garage-slab-calculator", cat: "Garage"},
    {name: "AC Tonnage Calculator", url: "/tools/hvac/ac-tonnage-calculator", cat: "HVAC"},
    {name: "Airflow Calculator", url: "/tools/hvac/airflow-calculator", cat: "HVAC"},
    {name: "BTU Calculator", url: "/tools/hvac/btu-calculator", cat: "HVAC"},
    {name: "Duct Size Calculator", url: "/tools/hvac/duct-calculator", cat: "HVAC"},
    {name: "Furnace Size Calculator", url: "/tools/hvac/furnace-size-calculator", cat: "HVAC"},
    {name: "HVAC Cost Calculator", url: "/tools/hvac/hvac-cost-calculator", cat: "HVAC"},
    {name: "Blown-In Insulation Calculator", url: "/tools/insulation/blown-in-insulation-calculator", cat: "Insulation"},
    {name: "Insulation Calculator", url: "/tools/insulation/insulation-calculator", cat: "Insulation"},
    {name: "R-Value Calculator", url: "/tools/insulation/r-value-calculator", cat: "Insulation"},
    {name: "Vapor Barrier Calculator", url: "/tools/insulation/vapor-barrier-calculator", cat: "Insulation"},
    {name: "Backsplash Calculator", url: "/tools/kitchen-bath/backsplash-calculator", cat: "Kitchen & Bath"},
    {name: "Bathroom Tile Calculator", url: "/tools/kitchen-bath/bathroom-tile-calculator", cat: "Kitchen & Bath"},
    {name: "Kitchen Cabinet Calculator", url: "/tools/kitchen-bath/cabinet-calculator", cat: "Kitchen & Bath"},
    {name: "Countertop Calculator", url: "/tools/kitchen-bath/countertop-calculator", cat: "Kitchen & Bath"},
    {name: "Shower Tile Calculator", url: "/tools/kitchen-bath/shower-tile-calculator", cat: "Kitchen & Bath"},
    {name: "Tub Surround Calculator", url: "/tools/kitchen-bath/tub-surround-calculator", cat: "Kitchen & Bath"},
    {name: "Bathroom Vanity Calculator", url: "/tools/kitchen-bath/vanity-calculator", cat: "Kitchen & Bath"},
    {name: "Yard Drainage Calculator", url: "/tools/landscaping/drainage-calculator", cat: "Landscaping"},
    {name: "Landscape Edging Calculator", url: "/tools/landscaping/edging-calculator", cat: "Landscaping"},
    {name: "Gravel Calculator", url: "/tools/landscaping/gravel-calculator", cat: "Landscaping"},
    {name: "Mulch Calculator", url: "/tools/landscaping/mulch-calculator", cat: "Landscaping"},
    {name: "Paver Calculator", url: "/tools/landscaping/paver-calculator", cat: "Landscaping"},
    {name: "Retaining Wall Calculator", url: "/tools/landscaping/retaining-wall-calculator", cat: "Landscaping"},
    {name: "Rock Calculator", url: "/tools/landscaping/rock-calculator", cat: "Landscaping"},
    {name: "Sand Calculator", url: "/tools/landscaping/sand-calculator", cat: "Landscaping"},
    {name: "Sod Calculator", url: "/tools/landscaping/sod-calculator", cat: "Landscaping"},
    {name: "Soil Calculator", url: "/tools/landscaping/soil-calculator", cat: "Landscaping"},
    {name: "Exterior Paint Calculator", url: "/tools/painting/exterior-paint-calculator", cat: "Painting"},
    {name: "Paint Calculator", url: "/tools/painting/paint-calculator", cat: "Painting"},
    {name: "Painting Cost Calculator", url: "/tools/painting/painting-cost-calculator", cat: "Painting"},
    {name: "Primer Calculator", url: "/tools/painting/primer-calculator", cat: "Painting"},
    {name: "Wood Stain Calculator", url: "/tools/painting/stain-calculator", cat: "Painting"},
    {name: "Wallpaper Calculator", url: "/tools/painting/wallpaper-calculator", cat: "Painting"},
    {name: "Asphalt Driveway Calculator", url: "/tools/paving/asphalt-driveway-calculator", cat: "Paving"},
    {name: "Drain Pipe Calculator", url: "/tools/plumbing/drain-pipe-calculator", cat: "Plumbing"},
    {name: "Plumbing Fixture Calculator", url: "/tools/plumbing/fixture-calculator", cat: "Plumbing"},
    {name: "Pipe Size Calculator", url: "/tools/plumbing/pipe-size-calculator", cat: "Plumbing"},
    {name: "Septic Tank Calculator", url: "/tools/plumbing/septic-tank-calculator", cat: "Plumbing"},
    {name: "Water Flow Calculator", url: "/tools/plumbing/water-flow-calculator", cat: "Plumbing"},
    {name: "Water Heater Calculator", url: "/tools/plumbing/water-heater-calculator", cat: "Plumbing"},
    {name: "Home Renovation Cost Calculator", url: "/tools/remodeling/home-renovation-cost-calculator", cat: "Remodeling"},
    {name: "Bathroom Remodel Cost Calculator", url: "/tools/remodeling/bathroom-remodel-cost-calculator", cat: "Remodeling"},
    {name: "Kitchen Remodel Cost Calculator", url: "/tools/remodeling/kitchen-remodel-cost-calculator", cat: "Remodeling"},
    {name: "Metal Roofing Calculator", url: "/tools/roofing/metal-roof-calculator", cat: "Roofing"},
    {name: "Roof Cost Calculator", url: "/tools/roofing/roof-cost-calculator", cat: "Roofing"},
    {name: "Roof Pitch Calculator", url: "/tools/roofing/roof-pitch-calculator", cat: "Roofing"},
    {name: "Roof Sheathing Calculator", url: "/tools/roofing/roof-sheathing-calculator", cat: "Roofing"},
    {name: "Roof Truss Calculator", url: "/tools/roofing/roof-truss-calculator", cat: "Roofing"},
    {name: "Roof Vent Calculator", url: "/tools/roofing/roof-vent-calculator", cat: "Roofing"},
    {name: "Roofing Calculator", url: "/tools/roofing/roofing-calculator", cat: "Roofing"},
    {name: "Shingle Calculator", url: "/tools/roofing/shingle-calculator", cat: "Roofing"},
    {name: "Skylight Calculator", url: "/tools/roofing/skylight-calculator", cat: "Roofing"},
    {name: "Brick Veneer Calculator", url: "/tools/siding/brick-veneer-calculator", cat: "Siding"},
    {name: "Gutter Calculator", url: "/tools/siding/gutter-calculator", cat: "Siding"},
    {name: "Siding Calculator", url: "/tools/siding/siding-calculator", cat: "Siding"},
    {name: "Siding Cost Calculator", url: "/tools/siding/siding-cost-calculator", cat: "Siding"},
    {name: "Stucco Calculator", url: "/tools/siding/stucco-calculator", cat: "Siding"},
    {name: "Vinyl Siding Calculator", url: "/tools/siding/vinyl-siding-calculator", cat: "Siding"},
    {name: "Solar Cost Calculator", url: "/tools/solar/solar-cost-calculator", cat: "Solar"},
    {name: "Solar Panel Calculator", url: "/tools/solar/solar-panel-calculator", cat: "Solar"},
    {name: "Wood Stair Calculator", url: "/tools/stairs/wood-stair-calculator", cat: "Stairs"},
    {name: "Door Calculator", url: "/tools/windows-doors/door-calculator", cat: "Windows & Doors"},
    {name: "Egress Window Calculator", url: "/tools/windows-doors/egress-window-calculator", cat: "Windows & Doors"},
    {name: "Garage Door Calculator", url: "/tools/windows-doors/garage-door-calculator", cat: "Windows & Doors"},
    {name: "Window Calculator", url: "/tools/windows-doors/window-calculator", cat: "Windows & Doors"},
    {name: "Window Cost Calculator", url: "/tools/windows-doors/window-cost-calculator", cat: "Windows & Doors"}
  ];

  function init() {
    var header = document.querySelector('.header-inner');
    if (!header) return;

    // Search container
    var wrap = document.createElement('div');
    wrap.className = 'site-search';
    wrap.innerHTML =
      '<input type="search" id="siteSearchInput" placeholder="Search 121 calculators..." autocomplete="off" aria-label="Search calculators">' +
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

    // Support URL-based search (?q=) so the SearchAction schema target works
    var params = new URLSearchParams(window.location.search);
    var q = params.get('q');
    if (q) {
      input.value = q;
      render(q);
      try { input.scrollIntoView({behavior: 'smooth', block: 'center'}); } catch (e) {}
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
