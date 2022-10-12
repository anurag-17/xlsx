import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

import { useRef } from "react";
export const Filters = () => {
  const [data, setdata] = useState([]);

  const [value, setValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsdistrict = data.filter((option) =>
    option.Name_of_the_District.includes(value)
  );

  const autocompleteRef = useRef();
  const api = async () => {
    const res = await axios.get("http://localhost:5000/api/auth/searchall");
    setdata(res.data);
    // setsearchfilter(res.data)
  };

  useEffect(() => {
    const handleClick = (event) => {
      if (
        autocompleteRef.current &&
        !autocompleteRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };
    api();
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSuggestionClick = (suggetion) => {
    setValue(suggetion);
    setShowSuggestions(false);
  };
  console.log(suggestionsdistrict);
  return (
    <div className="autocomplete" ref={autocompleteRef}>
      <input
        value={value}
        onChange={handleChange}
        placeholder="Search"
        onFocus={() => setShowSuggestions(true)}
      />
      {showSuggestions && (
        <ul className="suggestions">
          {suggestionsdistrict.map((suggestion) => {
            console.log(suggestion);
            return (
              <li style={{listStyleType:"none"}}
                onClick={() =>
                  handleSuggestionClick(suggestion.Name_of_the_District)
                }
                key={suggestion.Name_of_the_District}
              >
                {suggestion.Name_of_the_District}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
