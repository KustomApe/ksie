from selenium import webdriver
import pandas as pd
import time

"""[注意事項]
robot.txtを必ず読んで、ルールに沿った形でクローリングするように気をつけてください。
あくまで自己責任でお願いできればと思います。
"""

"""[Initial Setting]
初期設定
"""
options = webdriver.ChromeOptions()
options.add_argument('--headeless')
options.add_argument('--disable-gpu')
options.add_argument('--lang-ja')
browser = webdriver.Chrome(chrome_options=options, executable_path='./chromedriver')
df = pd.DataFrame(columns=['ranking', 'name', 'image'])
url = 'https://swsh.pokedb.tokyo/pokemon/list/'

"""[CSS Selector Setting]
CSSセレクターの設定
"""
COLUMNS = ".column"
RANKING = ".pokemon-ranking-rank"
NAME = ".pokemon-ranking-name"
IMAGE = ".product-item-list__item-image img"


"""[Activate Section]
実行部分
"""
browser.get(url)
print('Starting to get posts...')
items = browser.find_elements_by_css_selector(COLUMNS)
print(len(items))
for post in items:
    try:
        ranking = post.find_element_by_css_selector(RANKING).text
        print(ranking)
        name = post.find_element_by_css_selector(NAME).text
        print(name)
        thumbnailURL = post.find_element_by_css_selector(IMAGE).get_attribute('src')
        print(thumbnailURL)
        se = pd.Series([ranking, name, thumbnailURL], ['ranking', 'name', 'image'])
        df = df.append(se, ignore_index=True)
    except  Exception as e:
        print(e)
print('Finish crawling pokemons.')
df.to_csv('pokemons.csv')
print('Done')