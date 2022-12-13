import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

export const BoxInput = styled.div`
  width: 100%;
  margin-bottom: 15px;

  display: flex;
  flex-direction: column;

  position: relative;

  i {
    position: absolute;
    top: 20px;
    right: 50px;

    cursor: pointer;
  }

  input {
    :focus {
      background: #fff;
    }
  }
`;

export const InputStyled = styled.input`
  height: 50px;
  padding-left: 15px;

  background: #f5f5f5;
  border: 2px solid #f5f5f5;
  border-radius: 8px;

  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  ::placeholder {
    color: #999999;
  }

  :focus {
    background: #ffffff;

    ::placeholder {
      color: #ffffff;
    }
  }
`;

export const CssTextField = withStyles({
  root: {
    backgroundColor: "#F5F5F5",
    borderRadius: 4,

    "& label.Mui-focused": {
      color: "#999999",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#333333",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#F5F5F5",
      },
      "&:hover fieldset": {
        border: "2px solid #333333",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#333333",
      },
    },
  },
})(TextField);
