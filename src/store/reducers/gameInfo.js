const initialState = {
  games: [
    {gameMode: 'nba', favorite: {}, bestScore: 0, occurredOn: null},
    {
      gameMode: 'nfl',
      favorite: {
        name: 'Pittsburgh Steelers',
        imageUrl:
          'https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/pit.png&h=80&w=80',
      },
      bestScore: 45,
      occurredOn: 'week 10',
    },
    {
      gameMode: 'premier_league',
      favorite: {},
      bestScore: 0,
      occurredOn: null,
    },
    {gameMode: 'nascar', favorite: {}, bestScore: 0, occurredOn: null},
    {gameMode: 'golf', favorite: {}, bestScore: 0, occurredOn: null},
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
