import { createContext, useState } from "react";

export const ThemeContext = createContext({//isme hmne default value de ke rakhi haijb iske pass kuch nhi hoga tb 
    themMode  : "light",
    darkTheme: () => {},
    lightTheme: () => {},
});


export const ThemeProvider = ThemeContext.Provider;//provider vala kaam 

export default function useTheme(){//hm do  import lete hte phle useContext and UserContex karke abhi vo dono nhi lene padenge
    return useContext(ThemeContext);
}//iss  file me hmne do file ka kaam kr diya 


