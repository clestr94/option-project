import requests
from bs4 import BeautifulSoup
from flask import abort

# The options page blocks scraping with requests by default, so setting a custom header is necessary
BASE_URL = 'https://finance.yahoo.com/quote/{}/options?date={}'
HEADERS = {'User-Agent': 'Custom'}

# Selectors for calls and puts
CALLS_SEL = 'table[class*=calls]'
PUTS_SEL = 'table[class*=puts]'


def get_options_master(ticker, date=""):
  page_info = {}
  dates = None
  site_data = requests.get(BASE_URL.format(ticker,date), headers=HEADERS)
  soup = BeautifulSoup(site_data.text, 'html.parser')

  if 'Symbol Lookup from Yahoo Finance' in soup.title:
    abort(404, 'Ticker not found')
  if site_data.status_code > 400:
    abort(400, 'Unexpeted error')
  try:
    dates = soup.find('option', selected=True).parent
  except AttributeError:
    abort(404, 'Invalid expiry date')

  calls = soup.select(CALLS_SEL)[0]
  puts = soup.select(PUTS_SEL)[0]


  page_info.update(process_dates(dates, date))
  page_info.update({'calls': process_tables(calls)})
  page_info.update({'puts': process_tables(puts)})

  return page_info



def process_dates(dates_soup, date):
  dates_arr = []
  dates = dates_soup.findAll('option')
  for d in dates:
    dates_arr.append(d['value'])
  date_def = dates_arr[0] if not date else date

  return {'exp_dates': dates_arr, 'date_def': date_def}


def process_tables(table_soup):
  head = []
  body = []
  head_arr = table_soup.findAll('th')
  body_arr = table_soup.findAll('tr')

  for h in head_arr:
    head.append(h.text)

  for b in range(len(body_arr)):
    temp_arr = body_arr[b].findAll('td')
    temp = {}
    for t in range(len(temp_arr)):
      temp.update({head[t]: temp_arr[t].text})
    body.append(temp)

  body.pop(0)
  return {'head': head, 'body': body}
