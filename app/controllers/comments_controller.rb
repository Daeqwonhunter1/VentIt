class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :update, :destroy]
  before_action :authorize_request, except: %i[index show]

  def index
    @post = Post.find(params[:post_id])
    @comments = Comment.where(post_id: @post.id)
    render json: @comments, include: {post: {include: :subvent}}, status: :ok
  end
  
  def show
    @comments = Comment.find(params[:id])
    render json: @comments
  end

  def create
    @post = Post.find(params[:post_id])
    @comment= Comment.new(comment_params)
    @post.comment << @comment
    @comment.user = @current_user
   
    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    if @comment.update(comment_params)
      render json: @comment
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def comment_params
      params.require(:comment).permit(:content, :upvotes, :downvotes)
    end
end

