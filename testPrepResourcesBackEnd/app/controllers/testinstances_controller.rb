class TestinstancesController < ApplicationController
  before_action :set_testinstance, only: [:show, :update, :destroy]

  # GET /testinstances
  def index
    @testinstances = Testinstance.all

    render json: @testinstances
  end

  # GET /testinstances/1
  def show
    render json: @testinstance
  end

  # POST /testinstances
  def create
    @testinstance = Testinstance.new(testinstance_params)

    if @testinstance.save
      render json: @testinstance, status: :created, location: @testinstance
    else
      render json: @testinstance.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /testinstances/1
  def update
    if @testinstance.update(testinstance_params)
      render json: @testinstance
    else
      render json: @testinstance.errors, status: :unprocessable_entity
    end
  end

  # DELETE /testinstances/1
  def destroy
    @testinstance.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_testinstance
      @testinstance = Testinstance.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def testinstance_params
      params.require(:testinstance).permit(:name, :test_id)
    end
end
