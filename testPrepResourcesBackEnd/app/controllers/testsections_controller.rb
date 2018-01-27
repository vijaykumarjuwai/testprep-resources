class TestsectionsController < ApplicationController
  before_action :set_testsection, only: [:show, :update, :destroy]

  # GET /testsections
  def index
    @testsections = Testsection.all

    render json: @testsections
  end

  # GET /testsections/1
  def show
    render json: @testsection
  end

  # POST /testsections
  def create
    @testsection = Testsection.new(testsection_params)

    if @testsection.save
      render json: @testsection, status: :created, location: @testsection
    else
      render json: @testsection.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /testsections/1
  def update
    if @testsection.update(testsection_params)
      render json: @testsection
    else
      render json: @testsection.errors, status: :unprocessable_entity
    end
  end

  # DELETE /testsections/1
  def destroy
    @testsection.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_testsection
      @testsection = Testsection.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def testsection_params
      params.require(:testsection).permit(:name, :test_id)
    end
end
