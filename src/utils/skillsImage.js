import mysql from '../assets/svg/skills/mysql.svg'
import julia from '../assets/svg/skills/julia.svg'
import matlab from '../assets/svg/skills/matlab.svg'
import python from '../assets/svg/skills/python.svg'
import git from '../assets/svg/skills/git.svg'
import numpy from '../assets/svg/skills/numpy.svg'
import opencv from '../assets/svg/skills/opencv.svg'
import pytorch from '../assets/svg/skills/pytorch.svg'
import tensorflow from '../assets/svg/skills/tensorflow.svg'
import timeSeriesAnalysis from '../assets/svg/skills/TimeSeriesAnalysis.svg';
import dataCollectionScraping from '../assets/svg/skills/DataCollectionScraping.svg';
import keras from '../assets/svg/skills/Keras.png';
import scikitLearn from '../assets/svg/skills/ScikitLearn.png';
import pandas from '../assets/svg/skills/Pandas.png';
import seaborn from '../assets/svg/skills/Seaborn.svg';
import imblearn from '../assets/svg/skills/Imblearn.png';
import unsupervisedLearning from '../assets/svg/skills/UnsupervisedLearning.svg';
import statistics from '../assets/svg/skills/Statistics.png';
import tableau from '../assets/svg/skills/Tableau.svg';
import decisionTrees from '../assets/svg/skills/DecisionTrees.jpg';
import artificialNeuralNetworks from '../assets/svg/skills/ArtificialNeuralNetworks.png';
import transferLearning from '../assets/svg/skills/TransferLearning.png';
import deepLearning from '../assets/svg/skills/DeepLearning.png';
import dataAnalytics from '../assets/svg/skills/DataAnalytics.png';
import predictiveAnalytics from '../assets/svg/skills/PredictiveAnalytics.png';
import naturalLanguageProcessing from '../assets/svg/skills/NaturalLanguageProcessing.png';
import dataVisualization from '../assets/svg/skills/DataVisualization.jpg';
import microsoftPowerBI from '../assets/svg/skills/MicrosoftPowerBI.png';
import lasso from '../assets/svg/skills/Lasso.png';
import ridge from '../assets/svg/skills/Lasso.png';
import logisticRegression from '../assets/svg/skills/LogisticRegression.png';
import regularization from '../assets/svg/skills/Regularization.png';
import supervisedLearning from '../assets/svg/skills/SupervisedLearning.jpg';
import linearRegression from '../assets/svg/skills/LinearRegression.png';
import classification from '../assets/svg/skills/Classification.svg';
import gradientDescent from '../assets/svg/skills/GradientDescent.png';
import machineLearning from '../assets/svg/skills/MachineLearning.png';
import artificialIntelligence from '../assets/svg/skills/ArtificialIntelligence.png';
import mathematics from '../assets/svg/skills/Mathematics.png';
import jupyter from '../assets/svg/skills/Jupyter.png';

export const skillsImage = (skill) => {
    // const skillID = skill.toLowerCase();
    const skillID = skill;
    switch (skillID) {
        case 'MySQL':
            return mysql;
        case 'Julia':
            return julia;
        case 'Matlab':
            return matlab;
        case 'Python':
            return python;
        case 'Git':
            return git;
        case 'Numpy':
            return numpy;
        case 'OpenCV':
            return opencv;
        case 'Pytorch':
            return pytorch;
        case 'Tensorflow':
            return tensorflow;
        case 'Time Series Analysis':
            return timeSeriesAnalysis;
        case 'Data Collection/Scraping':
            return dataCollectionScraping;
        case 'Keras':
            return keras;
        case 'Scikit-learn':
            return scikitLearn;
        case 'Pandas':
            return pandas;
        case 'Seaborn':
            return seaborn;
        case 'Imblearn':
            return imblearn;
        case 'Unsupervised learning':
            return unsupervisedLearning;
        case 'Statistics':
            return statistics;
        case 'Tableau':
            return tableau;
        case 'Decision Trees':
            return decisionTrees;
        case 'Artificial Neural Networks':
            return artificialNeuralNetworks;
        case 'Transfer Learning':
            return transferLearning;
        case 'Deep Learning':
            return deepLearning;
        case 'Data Analytics':
            return dataAnalytics;
        case 'Predictive Analytics':
            return predictiveAnalytics;
        case 'Natural Language Processing':
            return naturalLanguageProcessing;
        case 'Data Visualization':
            return dataVisualization;
        case 'Microsoft PowerBI':
            return microsoftPowerBI;
        case 'Lasso':
            return lasso;
        case 'Ridge':
            return ridge;
        case 'Logistic Regression':
            return logisticRegression;
        case 'Regularization':
            return regularization;
        case 'Supervised Learning':
            return supervisedLearning;
        case 'Linear Regression':
            return linearRegression;
        case 'Classification':
            return classification;
        case 'Gradient Descent':
            return gradientDescent;
        case 'Machine Learning':
            return machineLearning;
        case 'Artificial Intelligence':
            return artificialIntelligence;
        case 'Mathematics':
            return mathematics;
        case 'Jupyter':
            return jupyter;
        default:
            break;
    }
}
