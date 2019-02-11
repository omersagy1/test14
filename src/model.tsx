export interface Model {
  count: number;
}

export type Action = Inc | Dec;


// The INC type only accepts the string value 'INC'.
export const INC = 'INC';
export type INC = typeof INC;

export const DEC = 'DEC';
export type DEC = typeof DEC;


export interface Inc {
  type: INC;
}

export interface Dec {
  type: DEC;
}


export const inc = (): Inc => {
  return {
    type: INC
  }
}

export const dec = (): Dec => {
  return {
    type: DEC
  }
}

export const update = (state: Model, action: Action): Model => {
  switch (action.type) {
    case INC:
      return { ...state, count: state.count + 1 };
    case DEC:
      return { ...state, count: state.count - 1 };
  }
  return state;
}