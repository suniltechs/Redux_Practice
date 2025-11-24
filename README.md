# 📘 React Practice — CRUD App with Redux Toolkit & React Router

This project is a simple React CRUD practice application built to learn and practice:

- React Hooks
- React Router
- Redux Toolkit (RTK)
- Global State Management
- Add, Edit, Delete functionality
- Form handling in React

### This app allows users to:

 ✔ Add Items (Fruits / Users) <br/>
 ✔ View All Items <br/>
 ✔ Edit an Item <br/>
 ✔ Delete an Item <br/>

## 🚀 Features

🔹 Add New Item : Users can enter name, age, email, or fruit details using a controlled form.<br/>

🔹 Edit Item : Users can edit existing data using an Edit page (/edit/:id route).<br/>

🔹 Delete Item : Each item has a delete button to remove it from Redux state.<br/>

🔹 Global State Management (Redux Toolkit) : All items are stored in a central Redux store.<br/>

🔹 Routing (React Router) : Navigation between pages using:

/ → Home (Add Form)

/users → Users List

/edit/:id → Edit Item Page

## 🛠️ Tech Stack

| Technology            | Purpose               |
| --------------------- | --------------------- |
| **React**             | UI development        |
| **Redux Toolkit**     | State management      |
| **React Router DOM**  | Routing               |
| **JavaScript (ES6+)** | Logic & interactivity |


## 🧠 Key Concepts Practiced

✔ useState : Handling input forms. <br/>

✔ useDispatch & useSelector : Dispatching Redux actions and selecting data from the store. <br/>

✔ createSlice : Creating reducers in Redux Toolkit. <br/>

✔ map(), filter() : Performing edit/delete operations immutably. <br/>

✔ useParams : Getting the ID for editing. <br/>

✔ useNavigate : Redirecting after editing. <br/>

✔ Controlled Inputs : Managing form state in React. <br/>

## 🧩 Example Redux Slice (CRUD)

```
setUsers: (state, action) => {
    state.users = [...state.users, action.payload]
},
deleteUsers: (state, action) => {
    state.users = state.users.filter((u) => u.id !== action.payload)
},
updateUser: (state, action) => {
    state.users = state.users.map((u) =>
        u.id === action.payload.id ? action.payload : u
    )
}
```

## 📜 License

This project is open-source and free to use.
