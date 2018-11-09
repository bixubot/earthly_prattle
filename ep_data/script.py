#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Fri Nov  9 15:52:01 2018

@author: guanmingqiao
"""

import json
import codecs
from pprint import pprint

with codecs.open('all.json', 'r', 'utf-8') as f:
    data = json.load(f)

newData = {}
genders = {}
boys = {}
girls = {}

count = 0
for pair in data['prattles']['boys']:
    prattle = pair['boys'].split()
    boys[count] = prattle
    count += 1
count = 0
for pair in data['prattles']['girls']:
    prattle = pair['girls'].split()
    girls[count] = prattle
    count += 1

genders['boys'] = boys
genders['girls'] = girls
newData['prattles'] = genders

pprint(newData)

with codecs.open('newData.json', 'w', 'utf-8') as outfile:
    json.dump(newData, outfile, ensure_ascii=False, indent=4)