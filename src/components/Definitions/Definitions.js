import React from "react";
import "./Definitions.css";

const Definitions = ({ meanings, word, LightTheme, category }) => {
  return (
    <div className="meanings">

      {word === "" ? (
        <span className="subTitle">Start by typing a word in search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((definition) => (
              <div
                className="singleMean"
                style={{
                  backgroundColor: LightTheme ? "#3b5360" : "white",
                  color: LightTheme ? "white" : "black",
                }}
              >
                <b>Meaning: </b><p>{definition.definition}</p>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {definition.example && (
                  <span>
                    <b>Example :</b> {definition.example}
                  </span>
                )}
                
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;