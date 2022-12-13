export const filterData = [
    {
      items: [
        { name: 'Vegan', value: 'Vegan', label: "Vegan"},
        { name: 'Vegetarian', value: 'Vegetarian', label: "Vegetarian" },
        { name: 'Non-Vegetarian', value: 'Non-Vegetarian', label: "Non-Vegetarian" },
        
      ],
      placeholder: 'Foood preference',
      queryName: 'foodPreference',
    },

    {
      items: [
        { name: "Doesn't drink", value: false, label: "Doesn't drink"},
        { name: 'Should drink', value: true, label: 'Should drink'},
        
      ],
      placeholder: 'Drinking',
      queryName: 'drinking',
    },

    {
      items: [
        { name: "Doesn't smoke", value: false, label:  "Doesn't smoke"},
        { name: 'Should smoke', value: true, label: 'Should smoke' },
        
      ],
      placeholder: 'Smoking',
      queryName: 'smoking'
    },

    {
      items: [
        { name: "Amateur", value: 'Amateur', label: "Amateur"},
        { name: 'Intermediate', value: 'Intermediate', label: 'Intermediate'},
        { name: 'Expert', value: 'Expert', label: 'Expert' },
        
      ],
      placeholder: 'Cooking skills',
      queryName: 'cookingSkills'
    },

    {
      items: [
        { name: 'MSCS', value: 'MSCS', label: 'MSCS' },
        { name: 'MCS', value: 'MCS', label: 'MCS' },
        { name: 'Masters Electrical', label: 'Masters Electrical' },
        { name: 'MSIM', value: 'MSIM', label: 'MSIM' },
        
      ],
      placeholder: 'Study program',
      queryName: 'studyProgram',
    },

]

export const getFilterValues = (filterValues) => {
    const {
      foodPreference,
      drinking,
      smoking,
      cookingSkills,
      studyProgram
    } = filterValues;
  
    const values = [
      {
        name: 'foodPreference',
        value: foodPreference,
      },
      {
        name: 'drinking',
        value: drinking,
      },
      {
        name: 'smoking',
        value: smoking,
      },
      {
        name: 'cookingSkills',
        value: cookingSkills,
      },
      {
        name: 'studyProgram',
        value: studyProgram,
      }
    ];
  
    return values;
};