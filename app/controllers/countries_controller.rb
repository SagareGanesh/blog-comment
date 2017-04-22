class CountriesController < ApplicationController

  def country_select
    respond_to do |format|
      format.html {}
      format.json do
        case params["type"]
        when "countries" then render json: all_countries
        when "states"    then render json: selected_states
        when "cities"    then render json: selected_cities
        end
      end
    end
  end

  private

  def all_countries
    CS.countries
  end

  def selected_states
    CS.states(params["country"]) if params["country"]
  end

  def selected_cities
    if params["state"] && params["country"]
      CS.cities(params["state"], params["country"])
    end
  end

end
