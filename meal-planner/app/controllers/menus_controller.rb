class MenusController < ApplicationController
  before_action :set_menu, only: [:show, :update, :destroy]
  before_action :authorize_request
  # GET /menus
  def index
  
  @menu = Menu.all.where(user_id: @current_user)


    render json: @menu
  end

  # GET /menus/1
  def show
    render json: @menu
  end

  # POST /menus
  def create
    @menu = Menu.new(menu_params)
    @menu.user = @current_user
    if @menu.save
      render json: @menu, status: :created
    else
      render json: @menu.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /menus/1
  def update
    if @menu.update(menu_params)
      render json: @menu
    else
      render json: @menu.errors, status: :unprocessable_entity
    end
  end

  # DELETE /menus/1
  def destroy
    @menu.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_menu
      @menu = Menu.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def menu_params
      params.require(:menu).permit(:name, :kcal, :start_date, :end_date)
    end
end
