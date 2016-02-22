class ArticlesController < ApplicationController
  def index
    @articles = Article.all.order('created_at')
  end
  def show
    @article = Article.find(params[:id])
  end
  def new
    @article = Article.new
  end
  def edit
    @article = Article.find(params[:id])
  end
  def create
    @article = Article.new
    @article.title = params[:article][:title]
    @article.body =  params[:article][:body]
    @article.save()
    redirect_to articles_path
    # render plain: params[:article][:title]
  end
  def update
    @article = Article.new
    @article.title = params[:article][:title]
    @article.body = params[:article][:body]
    @article.save()
    redirect_to articles_path
  end
  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    redirect_to articles_path
  end
end
