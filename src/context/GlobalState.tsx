import React, { createContext, useReducer } from 'react';
import { Pokedex } from '../interfaces';
import { AppReducer } from './AppReducer';

// interfaces 
export interface IGlobalContext extends IState {
    setClass(chosenClass: string): void;
    setHitPoints(hitPoints: number): void;
    setLevel(level: number): void; 
    setSubClass(subClass: string): void;
    setClassInfo(classInfo: any): void;
}
export interface IState {
    chosenClass: string;
    level: number;
    hitPoints: number | null;
    subClass: string;
    classInfo: Partial<Pokedex>;
}
export interface IReactChild {
    children: React.ReactNode
}

//  Initial State
const initialState: IState = {
    chosenClass: "",
    hitPoints: null,
    level: 0,
    subClass: "",
    classInfo: {},
};

// Create Context
export const GlobalContext = createContext<Partial<IGlobalContext>>(initialState);

// Provider component
export const GlobalProvider = ({ children }: IReactChild) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
  
    // Actions
    function setClass(chosenClass: string) {
      dispatch({
        type: "SET_CHOSEN_CLASS",
        payload: chosenClass
      });
    }
    function setHitPoints(hitPoints: number) {
        dispatch({
          type: "SET_HIT_POINTS",
          payload: hitPoints
        });
    }
    function setLevel(level: number) {
        dispatch({
            type: "SET_LEVEL",
            payload: level
        });
    }
    function setSubClass(subClass: string) {
        dispatch({
            type: "SET_SUB_CLASS",
            payload: subClass
        });
    }
    function setClassInfo(classInfo: any) {
        dispatch({
            type: "SET_CLASS_INFO",
            payload: classInfo
        });
    }

  
    return (<GlobalContext.Provider value={{
        chosenClass: state.chosenClass,
        hitPoints: state.hitPoints,
        level: state.level,
        subClass: state.subClass,
        classInfo: state.classInfo,
        setClass,
        setHitPoints,
        setLevel,
        setSubClass,
        setClassInfo,
    }}>
      {children}
    </GlobalContext.Provider>);
  }