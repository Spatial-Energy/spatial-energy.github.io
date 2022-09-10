// @ts-nocheck
import { fromPairs } from 'lodash';
import React from 'react';

/**
 * addEventListeners
 *
 * Allow multiple events to be added in one call, jQuery-style
 *
 * @param  {DOMElement}      element  target node
 * @param  {array, string}   events   events to add
 * @param  {function}        handler  event handler
 * @param  {object, boolean} options  event options
 */
export const addEventListeners = (
  target: HTMLElement | Window,
  events: string[] | string,
  handler: (...args: any[]) => any,
  options?: Record<any, any> | boolean
) => {
  if (!Array.isArray(events)) {
    events = events.split(' ');
  }

  events.forEach(event => {
    target.addEventListener(event, handler, options);
  });
};

/**
 * removeEventListeners
 *
 * Allow multiple events to be removed in one call, jQuery-style
 *
 * @param  {DOMElement}      element  target node
 * @param  {array, string}   events   events to remove
 * @param  {function}        handler  event handler
 * @param  {object, boolean} options  event options
 */
export const removeEventListeners = (
  target: HTMLElement | Window,
  events: string[] | string,
  handler: (...args: any[]) => any,
  options?: Record<any, any> | boolean
) => {
  if (!Array.isArray(events)) {
    events = events.split(' ');
  }

  events.forEach(event => {
    target.removeEventListener(event, handler, options);
  });
};

export const getAbsoluteOffset = element => {
  let top = 0;
  let left = 0;

  while (element) {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  }

  return { left, top };
};

export const getEventPath = event => {
  const path = [];
  let currentElem = event.target;

  while (currentElem) {
    path.push(currentElem);
    currentElem = currentElem.parentElement;
  }

  if (!path.includes(window) && !path.includes(document)) path.push(document);
  if (!path.includes(window)) path.push(window);

  return path;
};

export const getViewportInfo = () => {
  const viewport = document.querySelector('meta[name=viewport]');
  if (!viewport || !viewport['content'])
    return { width: window.innerWidth, height: window.innerHeight };

  return fromPairs(
    viewport['content'].split(',').map(content =>
      content
        .trim()
        .split('=')
        .map((data, index) => {
          if (index === 1 && data.match(/\d+/)) return parseFloat(data);
          return data;
        })
    )
  );
};

export const eventsMap = {
  mousemove: 'touchmove',
  mousedown: 'touchstart',
  mouseup: 'touchend',
} as const;

export const splitTextIntoLetters = (text: string) => {
  const array = text.split('');
  return array.map((letter, i) => <span key={`${i}-${letter}`}>{letter}</span>);
};

export const getCSSRules = (element: HTMLElement) => {
  const sheets = document.styleSheets;
  const matchingRules = [];
  element.matches = element.matches || element.webkitMatchesSelector;

  Array.from(sheets).forEach((sheet: CSSStyleSheet) => {
    const rules = sheet.rules || sheet.cssRules;

    Array.from(rules).forEach((rule: CSSStyleRule) => {
      if (element.matches(rule.selectorText)) matchingRules.push(rule.style);
    });
  });

  return matchingRules;
};
