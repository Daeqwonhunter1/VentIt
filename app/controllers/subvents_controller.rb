class SubventsController < ApplicationController
  before_action :set_subvent, only: [:show, :update, :destroy]
  before_action :authorize_request, except: %i[index show]

  # GET /subvents
  def index
    @subvents = Subvent.all
    render json: @subvents, include: {post: {include: :comments}}, status: :ok
  end

  # GET /subvents/1
  def show
    @subvent = Subvent.find(params[:id])
    render json: @subvent
  end

  # POST /subvents
  def create
    @subvent = Subvent.new(subvent_params)
    @subvent.user = @current_user
    if @subvent.save
      render json: @subvent, status: :created, location: @subvent
    else
      render json: @subvent.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /subvents/1
  def update
    if @subvent.update(subvent_params)
      render json: @subvent
    else
      render json: @subvent.errors, status: :unprocessable_entity
    end
  end

  # DELETE /subvents/1
  def destroy
    @subvent.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_subvent
      @subvent = Subvent.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def subvent_params
      params.require(:subvent).permit(:vent_title, :description, :image_url, :subvent_upvotes, :subvent_downvotes, :members, :user_id)
    end
end
