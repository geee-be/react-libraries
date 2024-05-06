'use client';

import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';
import type { InitialValue, SerializationOptions } from './state.util.js';
import { deserialize, getInitialValue, serialize } from './state.util.js';

type Response<T> =
  | [T, Dispatch<SetStateAction<T>>, true]
  | [undefined, Dispatch<SetStateAction<T>>, false];

const LOADING = Symbol('loading');

export const useHistoryState = <T, S = T>(
  key: string,
  initialValue: InitialValue<T>,
  replace = true,
  options?: SerializationOptions<T, S>,
): Response<T> => {
  if (typeof history === 'undefined') {
    return [undefined, () => {}, false];
  }

  const [value, setValue] = useState<T | typeof LOADING>(LOADING);

  useEffect(() => {
    setValue(
      deserialize(history.state?.[key], options?.fromSerializable) ??
        getInitialValue(initialValue),
    );
  }, [key, options?.fromSerializable, initialValue]);

  useEffect(() => {
    if (value === LOADING) return;

    if (replace) {
      history.replaceState(
        { ...history.state, [key]: serialize(value, options?.toSerializable) },
        '',
      );
    } else {
      history.pushState(
        { ...history.state, [key]: serialize(value, options?.toSerializable) },
        '',
      );
    }
  }, [key, value, options?.toSerializable, replace]);

  if (value === LOADING) {
    return [undefined, () => {}, false];
  }

  return [
    value,
    (v) => setValue(v as SetStateAction<T | typeof LOADING>),
    true,
  ];
};
