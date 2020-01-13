module ApplicationHelper

  def title_tag
    if @page_title
      "#{I18n.t('app_name')} | #{@page_title}"
    else
      I18n.t('app_name')
    end
  end
end
