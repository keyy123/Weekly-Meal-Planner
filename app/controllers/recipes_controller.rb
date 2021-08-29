class RecipesController < ApplicationController
  before_action :set_recipe, only: [:show, :update, :destroy]
  before_action :authorize_request

  # GET /recipes
  def index
    @recipes = Recipe.all

    render json: @recipes
  end

  # GET /recipes/1
  def show
    render json: @recipe
  end

  # POST /recipes
  # def create
   
    
  #   @menu = Menu.find(params[:menu_id])
  #   @recipe = Recipe.new(recipe_params)
   
  #   if @recipe.save
  #     render json: @recipe, status: :created
  #   else
  #     render json: @recipe.errors, status: :unprocessable_entity
  #   end
  # end


def add_to_menu
  @menu = Menu.find(params[:menu_id]) 
  @recipes = Recipe.new(recipe_params)
  @menu.recipes << @recipes 
  render json: @recipes, include: :menu
end





  # PATCH/PUT /recipes/1
  def update
    if @recipe.update(recipe_params)
      render json: @recipe
    else
      render json: @recipe.errors, status: :unprocessable_entity
    end
  end

  # DELETE /recipes/1
  def destroy
    @recipe.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_recipe
      @recipe = Recipe.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def recipe_params
      params.require(:recipe).permit(:name, :kcal, :pro, :carbs, :fat)
      
    end
end
