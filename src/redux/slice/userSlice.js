import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const api = "https://jsonplaceholder.typicode.com/users";

const initialState = {
  users: [],
  user: {},
  loading: false,
  error: "",
};

// fetch users
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(api);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.statusText);
    }
  }
);

// add new user
export const addNewUser = createAsyncThunk(
  "users/addUser",
  async (payload, { rejectWithValue }) => {
    try {
      const { name, email, username } = payload;
      const { data } = await axios.post(api, {
        data: {
          name,
          email,
          username,
        },
      });
      console.log({data})
      return data;
    } catch (error) {
      return rejectWithValue(error.response.statusText);
    }
  }
);

// update user
export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (payload, { rejectWithValue }) => {
    try {
      const { name, email, username, id } = payload;
      const { data } = await axios.patch(`${api}/${id}`, {
        data: {
          name,
          email,
          username,
          id,
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error.response.statusText);
    }
  }
);

// delete user
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (payload, { rejectWithValue }) => {
    try {
      const id = payload.id;
      const response = await axios.delete(`${api}/${id}`);
      console.log({response})
      return id;
    } catch (error) {
      return rejectWithValue(error.response.statusText);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // addNewUser: (state,action) => {
    //     state.users.push({...action.payload,id: nanoid()});
    // },
    // deleteUser: (state,action) => {
    //     state.users = state.users.filter(user => user.id !== action.payload.id)
    // }
  },
  extraReducers: (builder) => {
    // fetch all users
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.user = {};
      state.error = action.payload;
    });

    // add new user
    builder.addCase(addNewUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addNewUser.fulfilled, (state, action) => {
      console.log(action);

      const { name, email, username } = action.payload.data;
      const id = action.payload.id;
      state.loading = false;
      state.users.push({ name, email, username, id });
    });
    builder.addCase(addNewUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // update user
    builder.addCase(updateUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
        console.log(action);

        const { name, email, username, id } = action.payload.data;
        state.loading = false;
        state.users = state.users.map(user=>{
            return user.id===id ? {name,email,username,id} : user
        })
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // delete user
    builder.addCase(deleteUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      console.log(action);
      state.loading = false;
      state.users = state.users.filter((u) => u.id !== action.payload);
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

// export const { addNewUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
