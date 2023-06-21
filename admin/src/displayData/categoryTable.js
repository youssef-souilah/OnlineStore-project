
export const categoryColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "Name",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={"http://localhost:80/server/images/"+params.row.photo} alt="avatar" />
            {params.row.name}
          </div>
        );
      },
    },
  ];



  
  //temporary data
  export const categoryRows = [
    {
      id: 1,
      name: "Snow",
      photos_list: ["https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
      price: "1220",
      stock: "900",
    },
    {
      id: 2,
      name: "Snow",
      photos_list: ["https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
      price: "513",
      stock: "1snow@gmail.com",
    },
    {
      id: 3,
      name: "Snow",
      photos_list: ["https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
      price: "2132",
      stock: "1snow@gmail.com",
    },
    {
      id: 4,
      name: "Snow",
      photos_list: ["https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
      price: "3545",
      stock: "1snow@gmail.com",
    },
    {
      id: 5,
      name: "Snow",
      photos_list: ["https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
      price: "242421",
      stock: "1snow@gmail.com",
    },
    {
      id: 6,
      name: "Snow",
      photos_list: ["https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
      price: "1999",
      stock: "1snow@gmail.com",
    },
    {
      id: 7,
      name: "Snow",
      photo_list: ["https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"],
      price: "15549",
      photos_list: "1snow@gmail.com",
    },
    
  ];
  