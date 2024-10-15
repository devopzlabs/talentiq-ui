import React, { useState } from "react";
import "./AIScreener.css";

const AIScreener = () => {
  const [screenerData, setScreenerData] = useState([
    {
      question: "What is React?",
      difficultyLevel: "easy",
      experienceLevel: "junior",
    },
    {
      question: "Explain the use of Redux in React applications.",
      difficultyLevel: "medium",
      experienceLevel: "mid",
    },
    { question: "What is the difference between supervised and unsupervised learning?", difficultyLevel: "easy", experienceLevel: "junior" },
    { question: "What is the difference between a model's bias and variance?", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "Explain how clustering algorithms work.", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "What is the difference between K-means and hierarchical clustering?", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "How does the Apriori algorithm work in association rule learning?", difficultyLevel: "hard", experienceLevel: "senior" },
    { question: "What are decision trees, and how do they make decisions?", difficultyLevel: "easy", experienceLevel: "junior" },
    { question: "Explain the Gini index in decision trees.", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "What is entropy, and how is it used in decision trees?", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "How does a support vector machine (SVM) work?", difficultyLevel: "hard", experienceLevel: "senior" },
    { question: "What is the kernel trick in SVMs?", difficultyLevel: "hard", experienceLevel: "senior" },
    { question: "Explain the difference between regression and classification.", difficultyLevel: "easy", experienceLevel: "junior" },
    { question: "What is logistic regression?", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "Explain how Naive Bayes works.", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "What is the curse of dimensionality?", difficultyLevel: "hard", experienceLevel: "senior" },
    { question: "Describe the advantages and disadvantages of k-NN.", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "What is ensemble learning?", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "Explain the concept of feature selection.", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "What are outliers, and how can you detect them?", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "Explain the bias-variance tradeoff.", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "What is a perceptron in machine learning?", difficultyLevel: "easy", experienceLevel: "junior" },
    { question: "Describe the differences between batch gradient descent and stochastic gradient descent.", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "How do you evaluate the performance of a clustering algorithm?", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "What is the F1 score, and how is it calculated?", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "Explain how to handle missing data in a dataset.", difficultyLevel: "easy", experienceLevel: "junior" },
    { question: "What is an autoencoder, and how does it work?", difficultyLevel: "hard", experienceLevel: "senior" },
    { question: "Explain the use of one-hot encoding in machine learning.", difficultyLevel: "easy", experienceLevel: "junior" },
    { question: "What is the role of an optimizer in training a neural network?", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "How do you prevent overfitting in a machine learning model?", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "Explain the concept of overfitting in machine learning.", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "What is cross-validation, and why is it important?", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "How does gradient descent work?", difficultyLevel: "hard", experienceLevel: "senior" },
    { question: "What is the purpose of regularization in machine learning?", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "Explain the difference between L1 and L2 regularization.", difficultyLevel: "hard", experienceLevel: "senior" },
    { question: "What is the role of activation functions in neural networks?", difficultyLevel: "easy", experienceLevel: "junior" },
    { question: "Describe the architecture of a convolutional neural network (CNN).", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "What is the vanishing gradient problem?", difficultyLevel: "hard", experienceLevel: "senior" },
    { question: "How do RNNs differ from CNNs?", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "Explain the term 'transfer learning' in machine learning.", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "What is a confusion matrix, and how is it used?", difficultyLevel: "easy", experienceLevel: "junior" },
    { question: "Explain precision, recall, and F1 score.", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "What is the difference between bagging and boosting?", difficultyLevel: "hard", experienceLevel: "senior" },
    { question: "How does the random forest algorithm work?", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "Explain the concept of reinforcement learning.", difficultyLevel: "hard", experienceLevel: "senior" },
    { question: "What is Q-learning in reinforcement learning?", difficultyLevel: "hard", experienceLevel: "senior" },
    { question: "Describe the differences between k-means and k-nearest neighbors (KNN).", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "What is the purpose of feature scaling?", difficultyLevel: "easy", experienceLevel: "junior" },
    { question: "How does Principal Component Analysis (PCA) work?", difficultyLevel: "hard", experienceLevel: "senior" },
    { question: "What is natural language processing (NLP)?", difficultyLevel: "easy", experienceLevel: "junior" },
    { question: "Explain the term 'tokenization' in NLP.", difficultyLevel: "easy", experienceLevel: "junior" },
    { question: "How does word2vec work in NLP?", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "What is the difference between stemming and lemmatization?", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "Explain the Bag of Words (BoW) model.", difficultyLevel: "easy", experienceLevel: "junior" },
    { question: "What is TF-IDF, and how is it used in NLP?", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "Describe the architecture of a Transformer model.", difficultyLevel: "hard", experienceLevel: "senior" },
    { question: "What is BERT, and how does it work?", difficultyLevel: "hard", experienceLevel: "senior" },
    { question: "Explain the purpose of attention mechanisms in NLP.", difficultyLevel: "hard", experienceLevel: "senior" },
    { question: "What is a recurrent neural network (RNN)?", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "How does Long Short-Term Memory (LSTM) work?", difficultyLevel: "hard", experienceLevel: "senior" },
    { question: "What are word embeddings?", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "Explain the concept of 'dropout' in neural networks.", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "How does gradient boosting differ from AdaBoost?", difficultyLevel: "hard", experienceLevel: "senior" },
    { question: "What is the role of backpropagation in training neural networks?", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "Explain how k-fold cross-validation works.", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "What is data normalization, and why is it important?", difficultyLevel: "easy", experienceLevel: "junior" },
    { question: "Describe the use of ROC curves in evaluating models.", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "What is the difference between parametric and non-parametric models?", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "Explain the purpose of hyperparameter tuning.", difficultyLevel: "medium", experienceLevel: "mid" },
    { question: "What is a generative adversarial network (GAN)?", difficultyLevel: "hard", experienceLevel: "senior" },
    { question: "How do you handle imbalanced datasets?", difficultyLevel: "medium", experienceLevel: "mid" },
  ]);
  const [formData, setFormData] = useState({
    question: "",
    difficultyLevel: "",
    experienceLevel: "",
  });
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [filters, setFilters] = useState({
    question: "",
    difficultyLevel: "",
    experienceLevel: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setScreenerData((prevData) => [...prevData, formData]);
    setFormData({
      question: "",
      difficultyLevel: "",
      experienceLevel: "",
    });
  };

  const toggleFilters = () => {
    setFiltersVisible(!filtersVisible);
  };

  const filteredScreeners = screenerData.filter((screener) => {
    return (
      (filters.question === "" || screener.question.toLowerCase().includes(filters.question.toLowerCase())) &&
      (filters.difficultyLevel === "" || screener.difficultyLevel.toLowerCase().includes(filters.difficultyLevel.toLowerCase())) &&
      (filters.experienceLevel === "" || screener.experienceLevel.toLowerCase().includes(filters.experienceLevel.toLowerCase()))
    );
  });

  return (
    <div className="ai-screener">
      <div className="header-section">
        <h2>AI Screener</h2>
        <button className="create-new-button" onClick={handleSubmit}>Create New Screener</button>
      </div>

      {/* Collapsible Filters Section */}
      <div className="filter-section">
        <button className="toggle-filters-button" onClick={toggleFilters}>
          {filtersVisible ? "Hide Filters" : "Show Filters"}
        </button>
        {filtersVisible && (
          <div className="filters">
            <div className="filter">
              <label htmlFor="filterQuestion">Question:</label>
              <input
                type="text"
                id="filterQuestion"
                name="question"
                value={filters.question}
                onChange={handleFilterChange}
              />
            </div>
            <div className="filter">
              <label htmlFor="filterDifficultyLevel">Difficulty Level:</label>
              <select
                id="filterDifficultyLevel"
                name="difficultyLevel"
                value={filters.difficultyLevel}
                onChange={handleFilterChange}
              >
                <option value="">Select Difficulty Level</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <div className="filter">
              <label htmlFor="filterExperienceLevel">Experience Level:</label>
              <select
                id="filterExperienceLevel"
                name="experienceLevel"
                value={filters.experienceLevel}
                onChange={handleFilterChange}
              >
                <option value="">Select Experience Level</option>
                <option value="junior">Junior</option>
                <option value="mid">Mid</option>
                <option value="senior">Senior</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Screener Table Section */}
      {filteredScreeners.length === 0 ? (
        <div>No screeners available</div>
      ) : (
        <table className="ai-screener-table">
          <thead>
            <tr>
              <th>Question</th>
              <th>Difficulty Level</th>
              <th>Experience Level</th>
            </tr>
          </thead>
          <tbody>
            {filteredScreeners.map((screener, index) => (
              <tr key={index}>
                <td>{screener.question}</td>
                <td>{screener.difficultyLevel}</td>
                <td>{screener.experienceLevel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AIScreener;