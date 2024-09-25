import React, { useEffect } from "react";
import { ButtonState } from "../../../types";
import { useButtonstore } from "../../../store/useAnimatedButton";
import { useSearchStore } from "../../../store/useSearch";
import { useAnimationStore } from "../../../store/useAnimation";
import { useAspectRatio } from "../../../store/useAspectRatio";
import { useAutocompleteStore } from "../../../store/useAutocomplete";

const RepositoryApp: React.FC = () => {
  return (
    <>
      <AutocompleteBox />
    </>
  );
};

export default RepositoryApp;

const suggestionsList = ['Apple', 'Banana', 'Orange', 'Grape', 'Strawberry', 'Mango'];

const AutocompleteBox: React.FC = () => {

    const {inputValue,setInputValue,suggestions,setSuggestions} = useAutocompleteStore();

    useEffect(() => {
        if(inputValue){
            const filteredSuggestions = suggestionsList.filter(suggestion => suggestion.toLowerCase().includes(inputValue.toLowerCase()))
            setSuggestions(filteredSuggestions)
        }
        else{
            setSuggestions([]);
        }
    },[inputValue, setSuggestions]);

  return (
    <>
      <div style={{ position: 'relative', width: '300px' }}>
        <input type="text" value={inputValue}  onChange={(e) => setInputValue(e.target.value)} style={{ width: '100%',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',}}/>
           {suggestions.length > 0 && (
        <ul style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          border: '1px solid #ccc',
          borderRadius: '4px',
          backgroundColor: 'white',
          maxHeight: '150px',
          overflowY: 'auto',
          margin: '0',
          padding: '0',
          listStyleType: 'none',
        }}>
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              style={{
                padding: '10px',
                cursor: 'pointer',
                borderBottom: '1px solid #ccc',
              }}
              onClick={() => {
                setInputValue(suggestion);
                setSuggestions([]); // Clear suggestions
              }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      </div>
    </>
  );
};
