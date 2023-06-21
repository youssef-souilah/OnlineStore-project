const handleDelete = (id) => {
  alert("hhh")
};

export const orderColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
        
    },
    {
      field: "products_list",
      headerName: "Items Count",
      width: 120,
    },
    {
      field: "total_price",
      headerName: "Price",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
    },
  ];
  
  export const orderActions = [
    {
      field: "action",
      headerName: "Actions",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Aprove
            </div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Mark as delivred
            </div>
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const orderRows = [
    {
      id: 1,
      user: "Snow",
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
  