import matplotlib.pyplot as plt
import numpy as np
import sys


def isothermal_expansion_points(
    T, n=1.0, R=8.314, V_start=1.0, V_end=2.0, num_points=100
):
    volumes = np.linspace(V_start, V_end, num_points)
    pressures = n * R * T / volumes  # Using pV = nRT for an isothermal process
    return volumes, pressures


def adiabatic_expansion_points(
    T1, T2, n=1.0, R=8.314, V_start=1.0, gamma=1.4, num_points=100
):
    p1 = n * R * T1 / V_start  # Initial pressure
    constant = p1 * (V_start**gamma)  # Adiabatic constant
    V_end = V_start * (T1 / T2) ** (1 / (gamma - 1))
    volumes = np.linspace(V_start, V_end, num_points)
    pressures = constant / (volumes**gamma)
    return volumes, pressures


def carnot_cycle_points(T1, T2, V_A, V_C, n=1.0, R=8.314, gamma=1.4, num_points=100):
    # Calculate V_B and V_D based on the Carnot cycle
    V_B = V_C * (T2 / T1) ** (1 / (gamma - 1))
    V_D = V_A * (T1 / T2) ** (1 / (gamma - 1))
    print(f"V_B: {V_B}, V_D: {V_D}")

    return (
        isothermal_expansion_points(T1, n, R, V_A, V_B, num_points),
        adiabatic_expansion_points(T1, T2, n, R, V_B, gamma, num_points),
        isothermal_expansion_points(T2, n, R, V_C, V_D, num_points),
        adiabatic_expansion_points(T2, T1, n, R, V_D, gamma, num_points),
    )


def plot(path=None):
    # Define the temperatures
    T1 = 500  # Hot reservoir temperature in Kelvin
    T2 = 300  # Cold reservoir temperature in Kelvin
    V_A = 10.0  # Volume at point A
    V_C = 50.0  # Volume at point C
    n = 1.0  # Number of moles of gas
    R = 8.314  # Ideal gas constant in J/(mol*K)
    gamma = 1.667  # Heat capacity ratio for a diatomic gas
    num_points = 100  # Number of points for plotting
    # Get the points for the Carnot cycle
    (V_AB, P_AB), (V_BC, P_BC), (V_CD, P_CD), (V_DA, P_DA) = carnot_cycle_points(
        T1, T2, V_A, V_C, n, R, gamma, num_points
    )
    V_A2 = V_A * 0.8
    V_C2 = V_C * 1.2
    V_I1, P_I1 = isothermal_expansion_points(
        T1, n, R, V_A2, V_C, num_points
    )  # Isothermal expansion for the first part
    V_I2, P_I2 = isothermal_expansion_points(
        T2, n, R, V_C2, V_A, num_points
    )  # Isothermal expansion for the second part

    # Define the efficiency of the Carnot engine
    efficiency = 1 - (T2 / T1)

    # Print the results
    print(f"Carnot Engine Efficiency: {efficiency:.2f}")

    # Plotting the Carnot cycle
    plt.figure()
    plt.plot(V_I1, P_I1, linestyle="--", color="blue")
    plt.plot(V_I2, P_I2, linestyle="--", color="green")

    # Isothermal expansion (A to B)
    plt.plot(V_AB, P_AB, label="Isothermal Expansion (A to B)", color="blue")
    plt.plot(V_BC, P_BC, label="Adiabatic Expansion (B to C)", color="orange")
    plt.plot(V_CD, P_CD, label="Isothermal Compression (C to D)", color="green")
    plt.plot(V_DA, P_DA, label="Adiabatic Compression (D to A)", color="red")
    plt.title("Carnot Cycle")
    plt.xlabel("Volume (m³)")
    plt.ylabel("Pressure (Pa)")
    plt.legend()
    plt.grid()
    if path:
        plt.savefig(path)
    else:
        plt.show()


if __name__ == "__main__":
    if len(sys.argv) > 1:
        plot(sys.argv[1])
    else:
        plot()
