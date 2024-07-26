import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { addExpense , updateExpense} from "../redux/expenseSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const categories = [
  "Entertainment",
  "Transportation",
  "Utilities",
  "Rent",
  "Groceries",
  "Food",
  "Clothes",
];

const cashOptions = [
  "Cash",
  "Credit Card",
  "Debit Card",
  "Bank Transfer",
  "PayPal",
  "Apple Pay",
  "Google Pay",
  "Venmo",
  "Cheque",
  "Others",
];




export default function Modelpops({
  open,
  handleClose,
  expenseData,
  setExpenseData,
  edit,
  getById,
}) {
  const [formData, setFormData] = React.useState({
    category: "",
    amount: "",
    date: "",
    description: "",
    paymentMethod: "",
  });
  const reduxdata = useSelector((state) => state.expense);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("model pop ,", edit, reduxdata);
    if (getById && edit >= 0 && edit < reduxdata.length) {
      const data = reduxdata[edit];
      setFormData({
        category: data.category,
        amount: data.amount,
        date: data.date,
        description: data.description,
        paymentMethod: data.paymentMethod,
      });
    }
  }, [edit, expenseData, getById]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEdit = () => {
    // setExpenseData((prev) =>
    //   prev.map((item, index) =>
    //     index === edit
    //       ? {
    //           ...item,
    //           category: formData.category,
    //           amount: parseFloat(formData.amount),
    //           date: formData.date,
    //           description: formData.description,
    //           paymentMethod: formData.paymentMethod,
    //         }
    //       : item
    //   )
    // );
    dispatch(updateExpense({ index: edit, updatedData: formData }));
  toast.success("Success! Updated");
  handleClose(); // Close the modal after editing
  };

  const handleSubmit = () => {
    try {
      // setExpenseData((prev) => [
      //   ...prev,
      //   {
      //     category: formData.category,
      //     amount: parseFloat(formData.amount),
      //     date: formData.date,
      //     description: formData.description,
      //     paymentMethod: formData.paymentMethod,
      //   },
      // ]);
      dispatch(addExpense(formData));
      toast.success("Success! Added");
      handleClose(); // Close the modal after submission
    } catch (error) {
      toast.error("failed!", error);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {getById ? "Edit Expense" : "Add Expense"}
        </Typography>
        <Box
          component="form"
          sx={{ mt: 2 }}
          onSubmit={(e) => {
            e.preventDefault();
            getById ? handleEdit() : handleSubmit();
          }}
        >
          <FormControl fullWidth margin="normal">
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            margin="normal"
            label="Amount"
            name="amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Date"
            name="date"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={formData.date}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          
          <FormControl fullWidth margin="normal">
            <InputLabel id="paymentMethod-label">paymentMethod</InputLabel>
            <Select
              labelId="paymentMethod-label"
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              required
            >
              {cashOptions.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
   
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={getById ? handleEdit : handleSubmit}
          >
            {getById ? "Edit Expense" : "Add Expense"}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
