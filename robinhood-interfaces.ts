export interface Quote {
	ask_price: string; // "275.660000"
	ask_size: number; // 200
	bid_price: string; // "275.650000";
	bid_size: number; // 200;
	last_trade_price: string; // "275.560000";
	last_extended_hours_trade_price: string; // "275.650000";
	previous_close: string; //"278.220000";
	adjusted_previous_close: string; // "278.200000";
	previous_close_date: string; // "2020-04-09";
	symbol: string; // "SPY";
	trading_halted: boolean; // false;
	has_traded: boolean; // true;
	last_trade_price_source: string; // "nls";
	updated_at: string; // "2020-04-13T20:13:24Z";
	instrument: string; // "https://api.robinhood.com/instruments/8f92e76f-1e0e-4478-8580-16a6ffcfaef5/";
}

export interface Quotes {
	results: Quote[];
}

export interface Fundamentals {
	open: string; // "277.140000";
	high: string; // "277.420000";
	low: string; // "271.410000";
	volume: string; // "109781291.000000";
	average_volume_2_weeks: string; // "208413880.200000";
	average_volume: string; // "208413880.200000";
	high_52_weeks: string; // "339.080000";
	dividend_yield: string; // "2.081530";
	float: any | null; // null;
	low_52_weeks: string; // "218.260000";
	market_cap: string; // "256896012133.079987";
	pb_ratio: string; // "3.396300";
	pe_ratio: string; // "22.339000";
	shares_outstanding: string; // "932032116.000000";
	description: string; // "SPY tracks a market-cap-weighted index of US large- and midcap stocks selected by the S&P Committee.";
	instrument: string; // "https://api.robinhood.com/instruments/8f92e76f-1e0e-4478-8580-16a6ffcfaef5/";
	ceo: string; // "";
	headquarters_city: string; // "";
	headquarters_state: string; // "";
	sector: string; // "Miscellaneous";
	industry: string; // "Investment Trusts Or Mutual Funds";
	num_employees: any | null; // null;
	year_founded: any | null; // null;
}

export interface Historicals {
	begins_at: string; // "2020-04-13T13:00:00Z";
	open_price: string; // "277.360000";
	close_price: string; // "277.570000";
	high_price: string; // "277.580000";
	low_price: string; // "277.360000";
	volume: number; // 22699;
	session: "pre" | "reg" | "post";
	interpolated: boolean; // false;
}

export interface HistoricalsRegular {
	quote: string; // "https://api.robinhood.com/quotes/8f92e76f-1e0e-4478-8580-16a6ffcfaef5/";
	symbol: string; // "SPY";
	interval: null | "month" | "week" | "day" | "10minute" | "5minute";
	span: "20year" | "10year" | "5year" | "year" | "week" | "day";
	bounds: "regular";
	instrument: string; // "https://api.robinhood.com/instruments/8f92e76f-1e0e-4478-8580-16a6ffcfaef5/";
	historicals: Historicals[];
}

export interface HistoricalsTrading {
	quote: string; // "https://api.robinhood.com/quotes/8f92e76f-1e0e-4478-8580-16a6ffcfaef5/";
	symbol: string; // "SPY";
	interval: "10minute" | "5minute";
	span: "day";
	bounds: "trading";
	previous_close_price: string; // "278.200000";
	previous_close_time: string; // "2020-04-09T20:00:00Z";
	open_price: string; // "277.360000";
	open_time: string; // "2020-04-13T13:00:00Z";
	instrument: string; // "https://api.robinhood.com/instruments/8f92e76f-1e0e-4478-8580-16a6ffcfaef5/";
	historicals: Historicals[];
}
