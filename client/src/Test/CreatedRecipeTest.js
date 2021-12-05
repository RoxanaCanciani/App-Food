import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { postRecipes } from "../actions";
import configureStore from "redux-mock-store";
import CreatedRecipeDefault, {CreatedRecipe } from "../components/CreatedRecipe.js";

configure({ adapter: new Adapter() });

describe("<CreatedRecipe />", () => {
  describe("Estructura", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<CreatedRecipe />);
    });
    it("Renderiza un <form>", () => {
      expect(wrapper.find("form")).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Nombre:"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(0).text()).toEqual("Nombre");
    });

    it('Renderiza un input con la propiedad "name" igual a "name"', () => {
      expect(wrapper.find('input[name="name"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Resumen:"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(1).text()).toEqual("Resumen");
    });



    it('Renderiza un label con el texto igual a "Puntaje de salud:"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(2).text()).toEqual("Puntaje de salud");
    });

    it('Renderiza un input con la propiedad "name" igual a "healthScore"', () => {
      expect(wrapper.find('input[name="healthScore"]')).toHaveLength(1);
    });

    it('Renderiza un label con el texto igual a "Nivel de salud:"', () => {
      // El orden en el que se encuentran los Labels es importante.
      expect(wrapper.find("label").at(3).text()).toEqual("Date");
    });

    it('Renderiza un input con la propiedad "name" igual a "nivelHealth"', () => {
      expect(wrapper.find('input[name="nivelHealth"]')).toHaveLength(1);
    });
  
});
});


    