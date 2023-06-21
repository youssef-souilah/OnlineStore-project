export const productColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "Name",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={"http://localhost:80/server/images/"+params.row.photos_list[0]} alt="avatar" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "category_id",
      headerName: "Category",
      width: 230,
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 100,
    },
  ];

  const handleDelete = (id) => {
    alert("hhh")
  };
  
  export const productActions = [
    {
      field: "action",
      headerName: "Actions",
      width: 200,
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
              className="updateButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Update
            </div>
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const productRows = [
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
  