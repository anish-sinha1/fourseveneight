const financeTags: string[] = [
  "options",
  "option-pricing",
  "volatility",
  "black-scholes",
  "programming",
  "equities",
  "fixed-income",
  "interest-rates",
  "stochastic-processes",
  "time-series",
  "implied-volatility",
  "stochastic-calculus",
  "finance",
  "portfolio-management",
  "portfolio-optimization",
  "bond",
  "futures",
  "fx",
  "risk",
  "data",
  "monte-carlo",
  "derivatives",
  "quant-trading-strategies",
  "returns",
  "market-data",
  "brownian-motion",
  "trading",
  "risk-management",
  "statistics",
  "swaps",
  "risk-neutral-measure",
  "portfolio",
  "finance-mathematics",
  "quantlib",
  "hedging",
  "garch",
  "arbitrage",
  "correlation",
  "modern-portfolio-theory",
  "backtesting",
  "regression",
  "probability",
  "historical-data",
  "pricing",
  "stochastic-volatility",
  "optimization",
  "yield-curve",
  "python",
  "american-options",
  "factor-models",
  "greeks",
  "interest-rate-swap",
  "r",
  "asset-pricing",
  "forward",
  "high-frequency",
  "var",
  "capm",
  "algorithmic-trading",
  "simulations",
  "sharpe-ratio",
  "market-microstructure",
  "reference-request",
  "machine-learning",
  "modeling",
  "itos-lemma",
  "credit-risk",
  "variance",
  "forecasting",
  "mathematics",
  "bloomberg",
  "fama-french",
  "value-at-risk",
  "martingale",
  "heston",
  "delta-hedging",
  "market-making",
  "calibration",
  "beta",
  "option-strategies",
  "binomial-tree",
  "index",
  "models",
  "valuation",
  "econometrics",
  "european-options",
  "research",
  "no-arbitrage-theory",
  "statistical-finance",
  "delta",
  "quantitative",
  "bond-yields",
  "local-volatility",
  "mean-variance",
  "distribution",
  "risk-models",
  "volatility-smile",
  "covariance",
  "currency",
  "spread",
  "forward-rate",
  "libor",
  "cds",
  "automated-trading",
  "numerical-methods",
  "swaption",
  "exotics",
  "etf",
  "duration",
  "estimation",
  "vix",
  "limit-order-book",
  "asset-allocation",
  "cointegration",
  "pairs-trading",
  "performance-evaluation",
  "call",
  "dividends",
  "price",
  "log-returns",
  "default-probability",
  "bootstrapping",
  "prediction",
  "credit",
  "pca",
  "hullwhite",
  "replication",
  "markowitz",
  "discounting",
  "mean-reversion",
  "tick-data",
  "black-scholes-pde",
  "short-rate",
  "market",
  "covariance-matrix",
  "excel",
  "sde",
  "commodities",
  "quants",
  "copula",
  "gamma",
  "exchange",
  "normal-distribution",
  "put-call-parity",
  "yield",
  "convexity",
  "inflation",
  "expected-return",
  "self-study",
  "vasicek",
  "differential-equations",
  "lognormal",
  "order-execution",
  "asset-returns",
  "vega",
  "sabr",
  "barrier",
  "matlab",
  "portfolio-selection",
  "economics",
  "financial-engineering",
  "liquidity",
  "short-selling",
  "volatility-surface",
  "geometric-brownian",
  "standard-deviation",
  "finite-difference-method",
  "zero-coupon",
  "technical-analysis",
  "financial-markets",
  "random-walk",
  "skew",
  "strategy",
  "leverage",
  "intraday",
  "term-structure",
  "fundamentals",
  "algorithm",
  "investment",
  "binary-options",
  "interactive-brokers",
  "volume",
  "database",
  "books",
  "utility-theory",
  "hedge",
  "put",
  "girsanov",
  "stochastic",
  "ois-discounting",
  "risk-free",
  "treasuries",
  "interest",
  "return",
  "banks",
  "numerairechange",
  "auto-correlation",
  "correlation-matrix",
  "multivariate",
  "trading-systems",
  "indicator",
  "factor-investing",
  "cross-currency-basis",
  "bond-futures",
  "cva",
  "mbs",
  "asian-option",
  "stationarity",
  "credit-ratings",
  "yahoofinance",
  "ois",
  "binomial",
  "hedge-fund",
  "momentum",
  "accounting",
  "present-value",
  "parameter-estimation",
  "curve-fitting",
  "market-model",
  "spot-rate",
  "macro-economics",
  "jump-diffusion",
  "discount-factor-curve",
  "proof",
  "margin",
  "interpolation",
  "transaction-costs",
  "moving-average",
  "software",
  "pricing-formulae",
  "performance",
  "floating-rate",
  "spx",
  "kelly-criterion",
  "default",
  "diversification",
  "rates",
  "kalman",
  "investing",
  "merton-model",
  "expected-value",
  "banking-regulations",
  "mutual-fund",
  "basel",
  "soft-question",
  "theory",
  "arma",
  "spread-options",
  "skewness",
  "funds",
  "risk-premium",
  "implied",
  "black-litterman",
  "wienerprocess",
  "bitcoin",
  "eurodollars",
  "collateral",
  "performanceanalytics",
  "annualized",
  "factor-loading",
  "random-variables",
  "nasdaq",
  "cvar",
  "credit-derivatives",
  "arima",
  "homework",
  "calculation",
  "rebalancing",
  "basket",
  "fix",
  "convertible-bond",
  "delta-neutral",
  "analysis",
  "jump",
  "asset",
  "longshort",
  "sofr",
  "heath-jarrow-morton",
  "continuous-time",
  "benchmark",
  "orderbook",
  "black-scholes-merton",
  "market-efficiency",
  "compounding",
  "pnl",
  "basis",
  "stochastic-control",
  "stochastic-discount",
  "statistical-significance",
  "covariance-estimation",
  "european",
  "sec",
  "theta",
  "stopping-time",
  "forecast",
  "minimum-variance",
  "tracking-error",
  "earnings",
  "neural-networks",
  "testing",
  "mean",
  "data-mining",
  "markov",
  "high-frequency-estimators",
  "daycounting",
  "dcf",
  "payoff",
  "multicurve",
  "event-study",
  "sensitivities",
  "stress-testing",
  "fourier-transform",
  "numeraire",
  "insurance",
  "modelling",
  "derivation",
  "yahoo",
  "lmm",
  "coherent-risk-measure",
  "math",
  "charts",
  "density",
  "ratio",
  "debt",
  "moments",
  "central-banking",
  "kurtosis",
  "bid",
  "order",
  "position-sizing",
  "market-impact",
  "broker",
  "exposure",
  "black76",
  "financial",
  "default-risk",
  "black",
  "cme",
  "irs",
  "quantmod",
  "indexes",
  "order-handling",
  "counterparty-risk",
  "time",
  "quote",
  "anomalies",
  "real-world-measure",
  "normalization",
  "dynamic",
  "parabolic-pde",
  "arch",
  "nyse",
  "terminology",
  "tactical-asset-allocation",
  "technicals",
  "structured-finance",
  "historical",
  "trends",
  "synthetic",
  "convention",
  "bermudan",
  "edgar",
  "optimal-hedge-ratio",
  "annuity",
  "euler",
  "risk-neutral",
  "reuters",
  "market-risk",
  "money-management",
  "market-regimes",
  "cms",
  "ask",
  "data-source",
  "vba",
  "priips",
  "value-investing",
  "ornstein-uhlenbeck",
  "repo",
  "bayes-theory",
  "market-capitalization",
  "nonlinear",
  "cluster",
  "error",
  "information",
  "history",
  "career",
  "visualization",
  "cdo",
  "latency",
  "corporate-actions",
  "real-estate",
  "hurst-exponent",
  "bootstrap",
  "discrete-dividends",
  "paneldata",
  "wacc",
  "yield-futures",
  "banking",
  "callable-bonds",
  "abnormal-returns",
  "accrued-interest",
  "behavioral-finance",
  "dependence",
  "best-practices",
  "general",
  "maximum-drawdown",
  "fixed",
  "principal-components",
  "extrapolation",
  "bond-portfolio",
  "validation",
  "capital-structure",
  "codes",
  "libor-cessation",
  "papers",
  "sampling",
  "fair-value",
  "characteristic-function",
  "poisson-process",
  "sabr-model",
  "split",
  "expiration",
  "fees",
  "liquidity-risk",
  "markov-switching",
  "emh",
  "trade",
  "drawdown",
  "slippage",
  "credit-scoring",
  "education",
  "joint-probability",
  "open-interest",
  "interbank-rates",
  "tick",
  "negative",
  "hidden-markov-model",
  "parameter",
  "roll-adjustment",
  "transition-matrix",
  "betting",
  "repo-rate",
  "money-markets",
  "equivalent-measure",
  "american",
  "risk-parity",
  "volatility-interpolation",
  "variance-swap",
  "caplet",
  "google",
  "cholesky",
  "library",
  "random-matrix-theory",
  "learning",
  "adjustments",
  "intuition",
  "adjusted",
  "news",
  "eigenvalue",
  "robust-optimization",
  "outliers",
  "income",
  "graphs",
  "binary",
  "affine-processes",
  "poisson",
  "finite-difference",
  "regulatory-formula",
  "rquantlib",
  "ohlc",
  "private-equity",
  "mle",
  "sp500",
  "risk-free-rate",
  "cox-ingersoll-ross",
  "lags",
  "recovery",
  "lattice",
  "feed",
  "variance-gamma",
  "kernel",
  "embedded-options",
  "digital-signal-processing",
  "discussion",
  "tags",
  "allowed-topics",
  "status-completed",
  "support",
  "questions",
  "feature-request",
  "tag-synonyms",
  "off-topic",
  "bug",
  "closed-questions",
  "design",
  "closing-questions",
  "moderation",
  "flagging",
  "answers",
  "faq",
  "deleted-questions",
  "election",
];
export default financeTags;
