import { useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { techOption } from "../../data/dummyData";
import { useState } from "react";
import { Publish } from "@material-ui/icons";
import { blogService } from "../../services/blogService";

export const AddArticle = () => {
  const loggedInUser = useSelector((state) => state.userModule.loggedInUser);
  const [tech, setTech] = useState("React");
  const [subject, setSubject] = useState("");
  const [preArticle, setPreArticle] = useState("");
  const [bodyArticle, setBodyArticle] = useState("");
  const [endArticle, setEndArticle] = useState("");

  const handleSubject = (event) => {
    setSubject(event.target.value);
  };
  const handlePreArticle = (event) => {
    setPreArticle(event.target.value);
  };
  const handleBodyArticle = (event) => {
    setBodyArticle(event.target.value);
  };
  const handleEndArticle = (event) => {
    setEndArticle(event.target.value);
  };

  const publishArticle = () => {
    const article = {
        userId : loggedInUser.id,
        tech : tech,
        subject: subject,
        content: {
            pre: preArticle,
            body: bodyArticle,
            end: endArticle
        }
    }
    blogService.add(article);
  };
  return (
    <div className="addArticle">
      <div className="addArticleWrapper">
        <div className="topEditor">
          <form action="" className="topArticleForm">
            <img src={loggedInUser.profilePicture} alt="" />
            <TextField
              id="standard-read-only-input"
              label="Author"
              defaultValue={`${loggedInUser.username}`}
              InputProps={{
                readOnly: true,
              }}
            />
            <div className="ps-4">
              <TextField
                id="selectTech"
                select
                label="Tech"
                value={tech}
                onChange={() => {
                  setTech();
                }}
                SelectProps={{
                  native: true,
                }}
              >
                {techOption.map((option, index) => {
                  if (option.value !== "All") {
                    return (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    );
                  }
                })}
              </TextField>
            </div>
          </form>
          <form action="" className="subjectArticle">
            <TextField
              fullWidth
              id="standard-read-only-input subjectInput"
              label="Subject"
              onChange={handleSubject}
            />
          </form>
        </div>
        <div className="contentEditor">
          <div className="mb-1 boxContent">
            <TextField
              fullWidth
              id="outlined-multiline-static"
              multiline
              rows={1}
              placeholder="Pre"
              onChange={handlePreArticle}
            />
          </div>
          <div className="mb-1 boxContent">
            <TextField
              fullWidth
              id="outlined-multiline-static"
              multiline
              rows={4}
              placeholder="Body"
              onChange={handleBodyArticle}
            />
          </div>
          <div className="mb-1 boxContent">
            <TextField
              fullWidth
              id="outlined-multiline-static"
              multiline
              rows={1}
              placeholder="Conclusions"
              onChange={handleEndArticle}
            />
          </div>
        </div>
        <button
          className="btn-publise"
          onClick={() => {
            publishArticle();
          }}
        >
          Publise
        </button>
      </div>
    </div>
  );
};

{
  /* <FormControl fullWidth sx={{ m: 1 }}>
<InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
<OutlinedInput
  id="outlined-adornment-amount"
  value={values.amount}
  onChange={handleChange('amount')}
  startAdornment={<InputAdornment position="start">$</InputAdornment>}
  label="Amount"
/>
</FormControl> */
}
