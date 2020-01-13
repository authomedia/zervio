class PagesController < ApplicationController

  before_action :authenticate_user!

  def index
    @title = I18n.t('pages.index.title')
  end
end
