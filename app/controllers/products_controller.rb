class ProductsController < ApplicationController

    def index
        @product = Product.all
        rebder json: @product
    end

    def create
        @product = Product.create(product: params[:product])
        render json: @product
    end

    def update
        @product = Product.find(params[:id])
        @product.update_attribute(product: params[product])
        render json: @product
    end

    def destroy
        @product = Product.find(params[:id])
        if @product.destroy
            head :no_content, status: :ok
        else
            render json: @product.errors, status: :upprocessable_entity
        end
    end
    
end
