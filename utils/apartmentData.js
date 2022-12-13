export const filterData = [
    {
      items: [
        {'value': 1, label: '1'},
        {'value': 2, label: '2'},
        {'value': 3, label: '3'},
        {'value': 4, label: '4'},
        
      ],
      placeholder: 'Number of Baths',
      queryName: 'numberOfBaths',
    },

    {
        items: [
          {'value': 1, label: '1'},
          {'value': 2, label: '2'},
          {'value': 3, label: '3'},
          {'value': 4, label: '4'},
          
        ],
        placeholder: 'Number of Beds',
        queryName: 'numberOfBeds',
    },
    {
        items:[
            {'value': 0, label: "Min Price"},
            {'value': 200, label: '$200'},
            {'value': 300, label: '$300'},
            {'value': 400, label: '$400'},
            {'value': 500, label: '$500'},
            {'value': 600, label: '$600'},
            {'value': 700, label: '$700'},
            {'value': 800, label: '$800'},
            {'value': 900, label: '$900'},
            {'value': 1000, label: '$1000'},
        ],
        placeholder: 'Min Price',
        queryName: 'minPrice'
    },
    {
        items:[
            {'value': 1000000, label: "Max Price"},
            {'value': 300, label: '$300'},
            {'value': 400, label: '$400'},
            {'value': 500, label: '$500'},
            {'value': 600, label: '$600'},
            {'value': 700, label: '$700'},
            {'value': 800, label: '$800'},
            {'value': 900, label: '$900'},
            {'value': 1000, label: '$1000'},
            {'value': 1100, label: '$1100'},
            

        ],
        placeholder: 'Max Price',
        queryName: 'maxPrice'
    },

    {
        items:[
          {'value': 0, label: 'Min Area'},
          {'value': 500, label: '500'},
          {'value': 750, label: '750'},
          {'value': 1000, label: '1000'},
          {'value': 1250, label: '1250'},
          {'value': 1500, label: '1500'},
          {'value': 1750, label: '1750'},
          {'value': 2000, label: '2000'},

        ],
        placeholder: 'Min Area',
        queryName: 'minArea'
    },
    {
        items:[
          {'value': 100000, label: 'MaxArea'},
          {'value': 500, label: '500'},
          {'value': 750, label: '750'},
          {'value': 1000, label: '1000'},
          {'value': 1250, label: '1250'},
          {'value': 1500, label: '1500'},
          {'value': 1750, label: '1750'},
          {'value': 2000, label: '2000'},

        ],
        placeholder: 'Max Area',
        queryName: 'maxArea'
    },
    {
        items:[
            {'value': 'parking', label: 'Car Park'},
            {'value': 'dishwasher', label: 'Dishwasher'},
            {'value': 'elevator', label: 'Elevator'},
            {'value': 'internet', label: 'Internet'},
            {'value': 'laundry', label: 'Laundry'},
            {'value': 'petFriendly', label: 'Pet Friendly'},
            {'value': 'television', label: 'Television'},

        ],
        placeholder: 'Amenities',
        queryName: 'amenities'
    },
    {
        items: [
          { label: 'Lowest Price', value: 'price-asc' },
          { label: 'Highest Price', value: 'price-des' },
          { label: 'Newest', value: 'date-asc' },
          { label: 'Oldest', value: 'date-desc' },
        ],
        placeholder: 'Sort',
        queryName: 'sort',
    },

   

]

export const getFilterValues = (filterValues) => {
    const {
      numberOfBaths,
      numberOfBeds,
      minPrice,
      maxPrice,
      minArea,
      maxArea,
      amenities,
      sort
   
    } = filterValues;
  
    const values = [
      {
        name: 'numberOfBaths',
        value: numberOfBaths,
      },
      {
        name: 'numberOfBeds',
        value: numberOfBeds,
      },
      {
        name: 'minPrice',
        value: minPrice,
      },
      {
        name: 'maxPrice',
        value: maxPrice,
      },
      {
        name: 'minArea',
        value: minArea,
      },
      {
        name: 'maxArea',
        value: maxArea,
      },
      {
        name: 'amenities',
        value: amenities,
      },
      {
        name: 'sort',
        value: sort,
      },

    ];
  
    return values;
};